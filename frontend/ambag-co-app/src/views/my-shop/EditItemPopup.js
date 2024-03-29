import { getCategories, getCharities } from '../../apis/Get-apis';
import Popup from "../../components/Popup";
import "./EditItemPopup.css";
import { useState, useEffect } from 'react';

export default function EditItemPopup({ editButton, itemId, theItem }) {

    const [itemName, setItemName] = useState(theItem.item_name);
    const [itemPrice, setItemPrice] = useState(theItem.item_price);
    const [itemDesc, setItemDesc] = useState(theItem.item_desc);
    const [itemExp, setItemExp] = useState(theItem.item_exp_date);
    const [itemCategory, setItemCategory] = useState(theItem.cat_id);
    const [charity, setCharity] = useState(theItem.char_id);
    const [image, setImage] = useState(theItem.item_image);
    const [categories, setCategories] = useState([]);
    const [charities, setCharities] = useState([]);
    const [preview, setPreview] = useState('');
    const [imageInput, setImageInput] = useState('');




    const editItem = e => {
        e.preventDefault();

        new Promise((resolve, reject) => {
            const body = { itemName, itemPrice, itemDesc, itemExp,  itemCategory, charity, preview}
            const response = fetch(`http://localhost:5000/getItems/edit/${itemId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            resolve(response);
            reject("Failed to edit");
           
        })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        getCategories(setCategories);
        getCharities(setCharities);
    },[])

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

    return (
        <div>
            <Popup >
                <button className="btn close-btn" onClick={() => editButton(false)}>X</button>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <img src={image} width={150} height={150}></img>
                            <input className="mt-2" type="file" name="image"
                            onChange={(e) => { handleImageInput(e) }} value={imageInput}></input>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" value={itemName} onChange={(e) => { setItemName(e.target.value) }} type="text" placeholder="Name"></input>
                            </div>
                            <div className="col-6">
                                <input className="form-control" value={itemPrice} onChange={(e) => { setItemPrice(e.target.value) }} type="text" placeholder="Price"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <select className="form-control mt-2" name="category" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
                                    {categories.map((category) => {
                                       return <option value={category.cat_id}>{category.cat_name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-6">
                                <input className="form-control mt-2" value={itemExp} onChange={(e) => { setItemExp(e.target.value) }} type="Date" placeholder="Expiry"></input>
                            </div>
                        </div>
                        <select className="form-control mt-2" name="charity" value={charity} onChange={(e) => setCharity(e.target.value)}>
                            {charities.map((charity) => {
                                return <option value={charity.char_id}>{charity.char_name}</option>
                            })}    
                        </select>
                        <textarea className="form-control mt-2" value={itemDesc} onChange={(e) => { setItemDesc(e.target.value) }} placeholder="Description" maxLength={150}></textarea>
                    </div>
                </div>
                <div className="row mt-2 m-1">
                    <button className="save-btn col-3 ms-auto" onClick={(e) => { editItem(e); editButton(false) }}>Save</button>
                </div>
                {preview && (<img src={preview} className='mt-2' alt="chosen" style={{ height: '150px', width: '150px' }} />)}
            </Popup>
        </div>
    )
}