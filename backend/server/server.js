require('dotenv').config({ path: '../.env' });

const { cloudinary } = require('./utils/cloudinary');
const express = require('express');
const cors = require("cors");
const db = require("./database");
const { json } = require('express');
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT || 5000;

//default 
app.get('/', (req, res) => {
  res.send('Hello, World!');
})


//getting all items (NOTE: To update shop_id when login/signup is fixed, exception of items to display)
app.get('/getAllItems', (req,res) => {
  new Promise((resolve, reject) => {
    const result = db.query("SELECT * FROM items WHERE item_id NOT IN (SELECT UNNEST(items_list) FROM shopbags) AND shop_id != $1 ORDER BY item_id ASC",
    [1]);
    resolve(result);
    reject("Failed to get all items");
  })
    .then((result) => {
      res.status(200).json(result.rows)
    })
    .catch((err) => {
      console.error(err);
    })
})

//endpoint for getting items by a certain shop/seller (NOTE: To update shop_id when login/signup is fixed)
app.get('/getItems', (req, res) => {
  new Promise((resolve, reject) => {
    const result = db.query("SELECT * FROM items WHERE shop_id = $1 ORDER BY item_id ASC", [1]);
    resolve(result);
    reject("Failed to get all items");
  })
    .then((result) => {
      res.status(200).json(result.rows)
    })
    .catch((err) => {
      console.error(err);
    })
})



//endpoint for deleting an item
app.delete("/getItems/:id", (req, res) => {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
      const cld_id = db.query("SELECT item_cloudinary_id FROM items WHERE item_id = $1", [id]);
      resolve(cld_id)
    }).then((cld_id) => {
      cloudinary.uploader.destroy(cld_id.rows[0].item_cloudinary_id);
      // console.log(cld_id.rows[0].item_cloudinary_id);
    })

    const deleteItem = db.query("DELETE FROM items WHERE item_id = $1",
      [id]);
    resolve(deleteItem);
    reject("Failed to delete an item");
  })
    .then((deleteItem) =>
      console.log("Item was deleted")
    )
    .catch((err) => {
      console.error(err)
    })

  res.json("Item was deleted!")
})


//endpoint for editing an item
app.put("/getItems/edit/:id", (req, res) => {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    const result = db.query("UPDATE items SET item_name = $1, item_price = $2, item_desc =$3, item_exp_date= $4, cat_id= $5, char_id=$6 WHERE item_id = $7",
    [req.body.itemName, req.body.itemPrice, req.body.itemDesc, req.body.itemExp, req.body.itemCategory, req.body.charity, id]);
    resolve(result);
  })
  new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
      const cld_id = db.query("SELECT item_cloudinary_id FROM items WHERE item_id = $1", [id]);
      resolve(cld_id);
    }).then((cld_id)=> {
      cloudinary.uploader.destroy(cld_id.rows[0].item_cloudinary_id);
    }).then(()=>{
      cloudinary.uploader.upload(req.body.preview,{
        upload_preset: 'ambag_co'
     }).then((image) => {
      const editItem = db.query("UPDATE items SET item_cloudinary_id = $1, item_image=$2 WHERE item_id = $3",
      [ image.public_id, image.secure_url, id]);
    
    if (res.status(200)) {
      resolve(editItem);
    } else {
      reject(`Failed to update item #${id}`);
    }
     })
    })
    
  })
    .then((editItem) => {
      console.log(`Succesfully updated item #${id}`)
    })
    .catch((err) => {
      console.error(err)
    })
})

// endpoint for getting all categories
app.get('/getCategories', (req, res) => {
  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM categories ORDER BY cat_id ASC')
    resolve(result);
    reject("Failed to get categories");
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((err) => {
    console.log(err)
  })
})

// endpoint for getting all charities
app.get('/getCharities', (req, res) => {
  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM charities ORDER BY char_id ASC')
    resolve(result);
    reject("Failed to get charities");
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((err) => {
    console.log(err)
  })
})


//persisting-image and posting an item
app.post("/post-item", (req, response) => {
  // collected image from a user
  const data = {
    image: req.body.image
  }
 
  // upload image here
  cloudinary.uploader.upload(data.image,{
    upload_preset: 'ambag_co'
 })
  .then((image) => {
    new Promise((resolve, reject) => {
      const result = db.query("INSERT INTO items(cat_id, shop_id, item_name, item_price, item_desc, item_exp_date, item_date_posted, char_id, item_image, item_cloudinary_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [req.body.cat_id, req.body.shop_id , req.body.item_name ,req.body.item_price , req.body.item_desc,
      req.body.item_exp_date , req.body.item_date_posted , req.body.char, image.secure_url, image.public_id]);
      resolve(result)   
    }).then((result)=>console.log(result.rows[0]))
  }).then(
    response.status(201).send({
      status: "success",
      data: {
        message: "Image Uploaded Successfully",
      },
    })
  )
  .catch((error) => {
    response.status(500).send({
      message: "failure",
      error,
    });
  });
});

//endpoint for adding to bag
app.post("/add-to-bag", (req, response) => {
  new Promise((resolve,reject) => {
    const result = db.query('SELECT add_to_bag($1, $2)',
     [req.body.account_no, req.body.item]);
     resolve(result);
  }).then(
    response.status(201).send({
      status: "success",
      data: {
        message: "Added to bag",
      },
    })
  )
})


// endpoint for items in shopbag (NOTE: To replace $1 with account_id when login/signup is done)
app.get('/get-shopbag-items', (req, res) => {
  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM get_shopbag_items($1)', [1])
    resolve(result);
    reject("Failed to get shopbag items");
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((err) => {
    console.log(err)
  })
})


app.delete('/remove-shopbag-item/:id', (req, res) => {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    const result = db.query('SELECT remove_item($1, $2)', [1, id])
    resolve(result);
    reject("Failed to get shopbag items");
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((err) => {
    console.log(err)
  })
})

// endpoint for getting checked out items
app.get('/checkout/:method', (req, res) => {
  const { items } = req.query;

  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM get_checked_out_items($1)', [items])
    resolve(result)
    reject('Failed to get checked out items.')
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((error) => {
    console.log(error)
  })

  console.log(items)
})

// endpoint for getting subtotal of checked out items
app.get('/subtotal', (req, res) => {
  const { items } = req.query;

  new Promise((resolve, reject) => {
    const result = db.query('SELECT SUM(i_price) AS subtotal FROM get_checked_out_items($1)', [items])
    resolve(result)
    reject('Failed to get subtotal of checked out items.')
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((error) => {
    console.log(error)
  })
})

// endpoint for getting user's address
app.get('/get-address', (req, res) => {
  new Promise((resolve, reject) => {
    const result = db.query('SELECT user_addr AS addr FROM users WHERE user_id = $1 ', [1])
    resolve(result)
    reject("Failed to get user's address.")
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((error) => {
    console.log(error)
  })
})

// endpoint for getting shop name
app.get('/get-shopName', (req, res) => {
  const { items } = req.query;
  new Promise((resolve, reject) => {
    const result = db.query('SELECT shop_name AS s_name FROM shops, get_checked_out_items($1) WHERE shop_id = s_id', [items])
    resolve(result)
    reject("Failed to get shop name.")
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((error) => {
    console.log(error)
  })
})

// endpoint for getting charity
app.get('/get-charity', (req, res) => {
  const { items } = req.query;

  new Promise((resolve, reject) => {
    const result = db.query('SELECT DISTINCT char_id AS chr_id FROM items, get_checked_out_items($1) WHERE char_id = c_id', [items])
    resolve(result)
    reject("Failed to get charity.")
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((error) => {
    console.log(error)
  })
})

// endpoint for placing an order
app.post('/place-order', (req, res) => {
  new Promise((resolve, reject) => {
    const result = db.query('INSERT INTO donations(char_id, don_amount, don_dot, don_status) VALUES($1, $2, $3, $4) RETURNING *', 
    [req.body.c_id, req.body.d_amt, req.body.d_dot, req.body.d_stat])
    resolve(result)
    reject("Failed to place an order.")
  }).then((result) => {
    res.status(200).send({
      status: "Success",
      message : "Successfully placed an order"
    })
  }).catch((error) => {
    console.log(error)
  })
})


//endpoint for updating an item's don_id
app.put("/update-don-id", (req, res) => {
  const { items } = req.query;

  new Promise((resolve, reject) => {
    const result = db.query('CALL update_don_id($1)', [items]);
    resolve(result);
  })
    .then(() => {
      console.log(`Succesfully updated item's donation id.`)
    })
    .catch((error) => {
      console.error(error)
    })
})

//endpoint for search
app.get('/search-items', (req, res) => {
  const { keywords } = req.query;
  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM items WHERE item_name ILIKE $1',
    [`%${keywords}%`]);
    resolve(result);
    reject("Failed to get searched items");
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((err) => {
    console.log(err)
  })
})

//endpoint for editing profile
app.put("/edit-profile/:id", (req, res) => {
  const { id } = req.params;
  new Promise((resolve, reject) => {
    const result = db.query("UPDATE accounts SET user_id = $1, acc_username = $2, acc_email =$3, acc_password= $4 WHERE acc_id = $5",
    [1, req.body.acc_username, req.body.acc_email, req.body.acc_password, id]);
    resolve(result);
  })
  new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
      const cld_id = db.query("SELECT acc_cloudinary_id FROM accounts WHERE acc_id = $1", [id]);
      resolve(cld_id);
    }).then((cld_id)=> {
      cloudinary.uploader.destroy(cld_id.rows[0].item_cloudinary_id);
    }).then(()=>{
      cloudinary.uploader.upload(req.body.preview,{
        upload_preset: 'profile_pics'
     }).then((image) => {
      const editProfile = db.query("UPDATE accounts SET acc_cloudinary_id = $1, acc_image=$2 WHERE acc_id = $3",
      [ image.public_id, image.secure_url, id]);
    
    if (res.status(200)) {
      resolve(editProfile);
    } else {
      reject(`Failed to update profile #${id}`);
    }
     })
    })
    
  })
    .then((editItem) => {
      console.log(`Succesfully updated item #${id}`)
    })
    .catch((err) => {
      console.error(err)
    })
})



//endpoint for uploading profile
app.post("/upload-profile", (req, response) => {
  // collected image from a user
  const data = {
    image: req.body.image
  }
 
  // upload image here NOTE: user_id to update
  cloudinary.uploader.upload(data.image,{
    upload_preset: 'profile_pics'
 })
  .then((image) => {
    new Promise((resolve, reject) => {
      const result = db.query("INSERT INTO accounts(user_id, acc_username, acc_email, acc_password, acc_image, acc_cloudinary_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [1, req.body.acc_username, req.body.acc_email, req.body.acc_password, image.secure_url, image.public_id]);
      resolve(result)   
    }).then((result)=>console.log(result.rows[0]))
  }).then(
    response.status(201).send({
      status: "success",
      data: {
        message: "Image Uploaded Successfully",
      },
    })
  )
  .catch((error) => {
    response.status(500).send({
      message: "failure",
      error,
    });
  });
});


// endpoint for getting profile NOTE to update acc_id when signup is done
app.get('/get-profile', (req, res) => {
  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM accounts WHERE acc_id = $1', [3])
    resolve(result);
    reject("Failed to get charities");
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((err) => {
    console.log(err)
  })
})

//endpoint for getting purchase
app.get('/my-purchase/:status', (req, res) => {
  const { status } = req.query;

  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM get_my_purchase($1)', [status])
    resolve(result)
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((error) => {
    console.log(error)
  })
  console.log(status)
})

//endpoint for getting donation
app.get('/my-shop/my-donation/:status', (req, res) => {
  const { status } = req.query;

  new Promise((resolve, reject) => {
    const result = db.query('SELECT * FROM get_my_purchase($1)', [status])
    resolve(result)
  }).then((result) => {
    res.status(200).json(result.rows)
  }).catch((error) => {
    console.log(error)
  })
  console.log(status)
})

//endpoint for getting updating don status
app.put('/update-status', (req, res) => {

  new Promise((resolve, reject) => {
    const result = db.query('UPDATE donations SET don_status = $1 WHERE don_id = $2', [req.body.new_status, req.body.donId])
    console.log(req.body.new_status)
    console.log(req.body.donId)
    resolve(result)
  }).catch((error) => {
    console.log(error)
  })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})