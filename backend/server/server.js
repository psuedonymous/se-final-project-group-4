require('dotenv').config({path:'../.env'});
const express = require('express');
const cors = require("cors");
const db = require("./database");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

//default 
app.get('/', (req, res) => {
  res.send('Hello, World!');
})

//endpoint for getting all items (to modify by assignee)
app.get('/getItems', (req, res) => {
    new Promise((resolve, reject) => {
      const result = db.query("SELECT * FROM items");
      resolve(result);
    }).then((result) => console.log(result))

  res.status(200).json({
    status: "success"
  })
})

//endpoint for posting a new item
app.post('/postItem', (req,res) => {
  new Promise((resolve, reject) => {
    const result = db.query
    ("INSERT INTO donations(char_id, don_amount, don_dot) VALUES($1, $2, $3) RETURNING *",
    [req.body.item_charity, req.body.item_price, req.body.don_dot]);
    resolve(result);
  }).then((result) => {
    const result2 = db.query
    ("INSERT INTO items(cat_id, shop_id, don_id, item_name, item_price, item_desc, item_exp_date, item_date_posted) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [req.body.item_charity, req.body.shop_id, result.rows[0].don_id , req.body.item_name,req.body.item_price,req.body.item_desc,
    req.body.item_exp_date, req.body.item_date_posted]);
  }) //Add catch

  res.status(200).json({
    status: "success"
  })
})

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})

