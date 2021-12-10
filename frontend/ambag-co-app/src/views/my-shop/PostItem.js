import PostApi from '../../apis/Post-api';
import { useState } from 'react';
import Popup from '../../components/Popup';
import React from 'react'

export default function PostItem({popupButton}) {

  const[itemName, setItemName] = useState('');
  const[itemPrice, setItemPrice] = useState(0);
  const[expiry, setExpiry] = useState();
  const[charity, setCharity] = useState('');
  const[description, setDescription] = useState('');

  const handlePost = (e) =>{
    e.preventDefault()
    new Promise((resolve, reject) => {
      const response = PostApi.post('/postItem', {
      item_name: itemName,
      item_price: itemPrice,
      item_exp_date: expiry,
      item_charity: charity,
      item_desc: description
    })
    resolve(response)
  }).then((response) => console.log(response))
  }

  return (
    <>
    <div>
    <Popup>
    <button onClick={()=> popupButton(false)}>X</button>

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

          <input type="text" placeholder="Charity" 
          value = {charity} 
          onChange={(e)=> setCharity(e.target.value)}>
          </input>

          <input type="text" placeholder="description"
           value = {description} 
           onChange={(e)=> setDescription(e.target.value)}>
           </input>

           <button onClick={handlePost} type="submit">Post</button>
           </Popup>
    </div>
    </>
  )
}
