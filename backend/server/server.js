require('dotenv').config();
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
    //to update with new attributes
    const result = db.query
    ("INSERT INTO items(item_name, item_price, item_exp_date, item_charity, item_desc) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [req.body.item_name, req.body.item_price, req.body.item_exp_date, req.body.item_charity, req.body.item_desc]);
    resolve(result);
  }).then((result) => console.log(result)) //to chain with INSERT query for donations

  res.status(200).json({
    status: "success"
  })
})

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})

