import PostApi from '../../apis/Post-api';
import { getCategories, getCharities } from '../../apis/Get-apis';
import { useState, useEffect } from 'react';
import Popup from '../../components/Popup';
import React from 'react'
import './PostItem.css';


export default function PostItem({ popupButton }) {

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [expiry, setExpiry] = useState();
  const [charity, setCharity] = useState(1);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(1);
  const [today, setToday] = useState(new Date());
  const [imageInput, setImageInput] = useState('');
  const [preview, setPreview] = useState('');
  const [categories, setCategories] = useState([]);
  const [charities, setCharities] = useState([]);

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
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
          cat_id: category,
          shop_id: 2, //to update when sign in & signup is done
          don_dot: today,
          item_date_posted: today,
          char: charity
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

  useEffect(() => {
    getCategories(setCategories);
    getCharities(setCharities);
  },[])

  return (
    <>
      <div>
        <Popup>
          <h5 className='header'>
            Post a New Item
          </h5>
          <button onClick={() => popupButton(false)} className='btn close-btn'>X</button>

          <label>Item</label>
          <input className="form-control" type="text" placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}>
          </input>

          <label>Price</label>
          <input className="form-control" type="text" placeholder="Item price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}>
          </input>

          <label>Expiry</label>
          <input className="form-control" type="date" placeholder="Expiry date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}>
          </input>

          <label>Charity</label>
          <select className="form-control mt-2" name="charity" value={charity} onChange={(e) => setCharity(e.target.value)}>
            {charities.map((charity) => {
              return <option value={charity.char_id}>{charity.char_name}</option>
            })}
          </select>

          <label>Category</label>
          <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => {
              return <option value={category.cat_id}>{category.cat_name}</option>
            })}
          </select>

          <label>Description</label>
          <textarea className="form-control" type="text" placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}>
          </textarea>

          <form>
            <input
              className=" mt-2"
              type="file"
              name="image"
              onChange={(e) => { handleImageInput(e) }}
              value={imageInput}></input>
          </form>

          {preview && (<img src={preview} className='mt-2' alt="chosen" style={{ height: '300px', width: '350px' }} />)}

          <button onClick={(e) => {popupButton(false); handleNewPost(e) }} type="submit" className='save-btn col-3 ms-auto float-end mb-2 mt-2'>Post</button>
        </Popup>
      </div>
    </>
  )
}

