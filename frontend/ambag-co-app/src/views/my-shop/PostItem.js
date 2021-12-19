import PostApi from '../../apis/Post-api';
import { useState, useEffect } from 'react';
import Popup from '../../components/Popup';
import React from 'react'
import './PostItem.css';


export default function PostItem({popupButton}) {

  const[itemName, setItemName] = useState('');
  const[itemPrice, setItemPrice] = useState(0);
  const[expiry, setExpiry] = useState();
  const[charity, setCharity] = useState(1);
  const[description, setDescription] = useState('');
  const[category, setCategory] = useState();
  const[today, setToday] = useState(new Date());
  const[imageInput, setImageInput] = useState('');
  const[preview, setPreview] = useState('');
  const[categories, setCategories] = useState([]);

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

  const handleImageUpload = (e) => {
    e.preventDefault();
    uploadImage(preview);
  }

  const uploadImage = (base64EncodedImage) => {
    console.log(base64EncodedImage);
    new Promise((resolve, reject)=>{
      const result = fetch('http://localhost:5000/uploadImage',{
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-Type': 'application/json'}
      })
      resolve(result);
      reject("Failed to upload")
    })
    .catch((err) => {
      console.error(err)
    })
  }


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
        don_dot: today,
        don_stat: "pending",
        item_date_posted: today 
      })
      resolve(response);
      reject("Failed to post")
  })
  .then((response) => 
  console.log(response)
  )
  .catch((err) => {
    console.error(err)
  })

  window.location="/my-shop";
  }

  const getCategories = () => {
    new Promise((resolve, reject) => {
        const res = fetch("http://localhost:5000/getCategories");
        resolve(res)
    }).then((res) => {
        new Promise((resolve, reject) => {
            const data = res.json();
            resolve(data);
        }).then((data) => {
            setCategories(data);
        })
    })
  }

  useEffect(() => {
    getCategories();
  })

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
            <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((category) => {
                return <option value={category.cat_id}>{category.cat_name}</option>
              })}
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

          <button onClick={(e)=> {handlePost(e); popupButton(false); handleImageUpload(e) }} type="submit" className='save-btn col-3 ms-auto float-end mb-2 mt-2'>Post</button>
    </Popup>
    </div>
    </>
  )
}

