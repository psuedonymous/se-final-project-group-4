import PostApi from '../../apis/Post-api';
import { useState } from 'react';
import Popup from '../../components/Popup';
import React from 'react'


export default function PostItem({popupButton}) {

  const[itemName, setItemName] = useState('');
  const[itemPrice, setItemPrice] = useState(0);
  const[expiry, setExpiry] = useState();
  const[charity, setCharity] = useState(1);
  const[description, setDescription] = useState('');
  const[category, setCategory] = useState();

  const handlePost = (e) =>{
    e.preventDefault()
      new Promise((resolve, reject) => {
        const response = PostApi.post('/postItem', {
        item_name: itemName,
        item_price: itemPrice,
        item_exp_date: expiry,
        item_charity: charity,
        item_desc: description,
        cat_id: category,
        shop_id: 1, //to update when sign in & signup is done
        don_dot: '2020-12-12', //to update
        item_date_posted: '2020-12-12' //to update
      })
      resolve(response)
  }).then((response) => console.log(response))
  }

  return (
    <>
    <div>
    <Popup>
          <button onClick={()=> popupButton(false)} className='btn close-btn'>X</button>

          <input type="text" placeholder="Item name" 
            value = {itemName}
            onChange={(e)=> setItemName(e.target.value)}>
          </input>

          <input type="text" placeholder="Item price" 
            value = {itemPrice} 
            onChange={(e)=> setItemPrice(e.target.value)}>
          </input>

          <input type="date" placeholder="Expiry date" 
            value = {expiry} 
            onChange={(e)=> setExpiry(e.target.value)}>
          </input>

          {/* value not changing on select, to update */}
          <label>Charity</label>
            <select>
              <option value={1} onChange={(e)=> setCharity(e.target.value)}>Share an Opportunity</option>
            </select>

          {/* value not changing on select, to update */}
          <label>Category</label>
            <select value = {category} onChange={(e)=>setCategory(e.target.value)}>
              <option value='1' >Apparel</option>
              <option value='2' >Gadgets</option>
              <option value='3' >Stationery</option>
              <option value='4' >Appliances</option>
              <option value='5' >Groceries</option>
              <option value='6' >Toys</option>
              <option value='7' >Accessories</option>
              <option value='8' >Health</option>
            </select>

          <input type="text" placeholder="description"
            value = {description} 
            onChange={(e)=> setDescription(e.target.value)}>
          </input>

          <button onClick={handlePost} type="submit" className='save-btn col-3 ms-auto'>Post</button>
    </Popup>
    </div>
    </>
  )
}

