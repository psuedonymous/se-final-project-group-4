import Popup from "../../components/Popup";
import "./EditItemPopup.css";
import {useState} from 'react';

export default function EditItemPopup({ editButton, itemId, theItem }) {


  const[itemName, setItemName] = useState(theItem.item_name);
  const[itemPrice, setItemPrice] = useState(theItem.item_price);
  const[itemCategory, setItemCategory] = useState(theItem.item_cat);
  const[itemDesc, setItemDesc] = useState(theItem.item_desc);
  const[itemExp, setItemExp] = useState(theItem.item_exp_date);

  const editItem = e =>{
    e.preventDefault();

    new Promise((resolve,reject)=>{
      const body = {itemName, itemPrice, itemDesc, itemExp}
      const response = fetch(`http://localhost:5000/getItems/${itemId}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      resolve(response);
      reject("Failed to edit");
      window.location ="/my-shop";
    })
    .catch((err) => {
      console.error(err)
    })
  }

    return (
        <div>
            <Popup >
                <button className="btn close-btn" onClick={() => editButton(false)}>X</button>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <img src="https://www.qoobee.com/wp-content/uploads/QooBee-Stuffed-Toy-2019.jpg" width={150} height={150}></img>
                            <input className="mt-2" type="file"></input>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" value={itemName} onChange={(e)=>{setItemName(e.target.value)}} type="text" placeholder="Name"></input>
                            </div>
                            <div className="col-6">
                                <input className="form-control" value={itemPrice} onChange={(e)=>{setItemPrice(e.target.value)}} type="text" placeholder="Price"></input>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6">
                            <select className="form-control mt-2" name="category">
                                <option value="select-charity">Share an Opportunity</option>
                            </select>
                            </div>
                            <div className="col-6">
                            <input className="form-control mt-2" value={itemExp} onChange={(e)=>{setItemExp(e.target.value)}} type="Date" placeholder="Expiry"></input>
                            </div>
                        </div>
                        <select className="form-control mt-2" name="charity">
                            <option value="select-charity">Share an Opportunity</option>
                        </select>
                        <textarea className="form-control mt-2" value={itemDesc} onChange={(e)=>{setItemDesc(e.target.value)}} placeholder="Description" maxLength={150}></textarea>
                    </div>
                </div>
                <div className="row mt-2 m-1">
                    <button className="save-btn col-3 ms-auto" onClick={(e) => {editItem(e); editButton(false)}}>Save</button>
                </div>
            </Popup>
        </div>
    )
}