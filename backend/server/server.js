require('dotenv').config({path:'../.env'});

const { cloudinary } = require('./utils/cloudinary');
const express = require('express');
const cors = require("cors");
const db = require("./database");
const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb', extended:true}));

const port = process.env.PORT || 5000;

//default 
app.get('/', (req, res) => {
  res.send('Hello, World!');
})

//endpoint for getting all items 
app.get('/getItems', (req, res) => {
    new Promise((resolve, reject) => {
      const result = db.query("SELECT * FROM items");
      resolve(result);
      reject("Failed to get all items");
    })
    .then((result)=>{
      res.status(200).json(result.rows)
    })
    .catch((err) => {
      console.error(err);
    })
})

//endpoint for getting images from cloudinary [not yet working]
app.get('/getImages', (req,res)=>{
  new Promise((resolve,reject)=>{
    const { resources } = cloudinary.search
    .expression('folder:ambag_co')
    .execute().then((resources) =>{
      res.send(resources)
    })
  })
  .catch((err)=>{ 
    console.error(err);
  })

})

//endpoint for uploading images to cloudinary
app.post('/uploadImage', (req,res)=>{
  new Promise((resolve,reject)=>{
    const fileStr = req.body.data;
    const uploadResponse = cloudinary.uploader.upload(fileStr,{
       upload_preset: 'ambag_co'
    })
    resolve(uploadResponse);
    reject("Failed to upload an image");
  })
  .then((uploadResponse)=> 
  console.log(uploadResponse)
  )
  .catch((err) => {
    console.error(err);
  })

  res.json({message:"uploaded successfully"});
})

//endpoint for posting a new item
app.post('/postItem', (req,res) => {
  new Promise((resolve, reject) => {
    const result = db.query
    ("INSERT INTO donations(char_id, don_amount, don_dot) VALUES($1, $2, $3) RETURNING *",
    [req.body.item_charity, req.body.item_price, req.body.don_dot]);
    resolve(result);
    reject("Failed to post an item")
  })
  .then((result) => {
    const result2 = db.query
    ("INSERT INTO items(cat_id, shop_id, don_id, item_name, item_price, item_desc, item_exp_date, item_date_posted) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [req.body.item_charity, req.body.shop_id, result.rows[0].don_id , req.body.item_name,req.body.item_price,req.body.item_desc,
    req.body.item_exp_date, req.body.item_date_posted]);
  })
  .catch((err)=>{
    console.error(err);
  })

  res.status(200).json({
    status: "success"
  })
})


//endpoint for deleting an item
app.delete("/getItems/:id", (req,res)=>{
  new Promise((resolve,reject)=>{
    const {id} = req.params;
    const deleteItem = db.query("DELETE FROM items WHERE item_id = $1",
    [id]);
    resolve(deleteItem);
    reject("Failed to delete an item");
  })
  .then((deleteItem)=> 
    console.log("Item was deleted")
  )
  .catch((err)=> {
    console.error(err)
  })

  res.json("Item was deleted!")
})


//endpoint for editing an item
app.put("/getItems/:id", (req, res)=>{
  new Promise((resolve, reject)=>{
    const {id} = req.params;
    const editItem = db.query("UPDATE items SET item_name = $1, item_price = $2, item_desc =$3, item_exp_date= $4 WHERE item_id = $5",
    [req.body.itemName, req.body.itemPrice, req.body.itemDesc, req.body.itemExp , id])
    resolve(editItem);
    reject("Failed to edit an item");
  })
  .then((editItem)=>
  console.log("Edited")
  )
  .catch((err) => {
    console.error(err)
  })


  res.json("Item was edited!")
})

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})

