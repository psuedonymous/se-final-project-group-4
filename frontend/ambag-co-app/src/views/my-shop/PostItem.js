import PostApi from '../../apis/Post-api';
import { useState, useEffect} from 'react';
import Popup from '../../components/Popup';
import React from 'react'
import './PostItem.css';


export default function PostItem({popupButton}) {
  var id = [];
  const[itemName, setItemName] = useState('');
  const[itemPrice, setItemPrice] = useState(0);
  const[expiry, setExpiry] = useState();
  const[charity, setCharity] = useState(1);
  const[description, setDescription] = useState('');
  const[category, setCategory] = useState(1);
  const[today, setToday] = useState(new Date());
  const[imageInput, setImageInput] = useState('');
  const[preview, setPreview] = useState('');
  const[imageID, setImageId] = useState('');

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  } 

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () =>{
      setPreview(reader.result)
    }
  }

  const handleNewPost = (e) => {
    e.preventDefault();
    postItem(preview);
  }


  const postItem = (base64EncodedImage) => {
  
    new Promise((resolve, reject)=>{
      const result = fetch('http://localhost:5000/post-item',{
        method: 'POST',
        body: JSON.stringify({image: base64EncodedImage,
          item_name: itemName,
          item_price: itemPrice,
          item_exp_date: expiry,
          item_charity: charity,
          item_desc: description,
          cat_id: 1,
          shop_id: 1, //to update when sign in & signup is done
          don_dot: today,
          item_date_posted: today,
          char: 1
        }),
        headers: {'Content-Type': 'application/json'}
      })
      resolve(result);
      reject("Failed to upload")
    }).then((result) => {
    new Promise((resolve, reject)=>{
      const  theR  = result.json();
      resolve(theR)
      }) 
    })
    .catch((err) => {
      console.error(err)
    })
    
    }
 

  return (
    <>
    <div>
    <Popup>
      <h5 className='header'>
        Post a New Item
      </h5>
          <button onClick={()=> popupButton(false)} className='btn close-btn'>X</button>

          <label>Item</label>
            <input className="form-control" type="text" placeholder="Item name" 
              value = {itemName}
              onChange={(e)=> setItemName(e.target.value)}>
            </input>

          <label>Price</label>
            <input className="form-control" type="text" placeholder="Item price" 
              value = {itemPrice} 
              onChange={(e)=> setItemPrice(e.target.value)}>
            </input>

          <label>Expiry</label>
            <input className="form-control" type="date" placeholder="Expiry date" 
              value = {expiry} 
              onChange={(e)=> setExpiry(e.target.value)}>
            </input>

          {/* value not changing on select, to update */}
          <label>Charity</label>
            <select className="form-control">
              <option value={1} onChange={(e)=> setCharity(e.target.value)}>Share an Opportunity</option>
            </select>

          {/* value not changing on select, to update */}
          <label>Category</label>
            <select className="form-control"  >
              <option value='1' >Apparel</option>
              <option value='2' >Gadgets</option>
              <option value='3' >Stationery</option>
              <option value='4' >Appliances</option>
              <option value='5' >Groceries</option>
              <option value='6' >Toys</option>
              <option value='7' >Accessories</option>
              <option value='8' >Health</option>
            </select>

       

          <label>Description</label>
            <textarea className="form-control" type="text" placeholder="description"
              value = {description} 
              onChange={(e)=> setDescription(e.target.value)}>
            </textarea>

          <form>
            <input 
            className=" mt-2" 
            type="file" 
            name="image"
            onChange={(e) => {handleImageInput(e)}}
            value={imageInput}></input>
          </form>

          {preview && (<img src={preview} className='mt-2' alt="chosen" style={{height:'300px', width:'350px'}}/>)}

          <button onClick={(e)=> {popupButton(false); handleNewPost(e); console.log(id) }} type="submit" className='save-btn col-3 ms-auto float-end mb-2 mt-2'>Post</button>
    </Popup>
    </div>
    </>
  )
}

