import React from 'react';
import './ShopbagItemCard.css';
import { useState } from 'react';

export default function ShopBagItemCard(props) {

  const removeItem = () => {
    new Promise((resolve, reject)=>{
      const deleteTodo = fetch(`http://localhost:5000/remove-shopbag-item/${props.id}`,{
        method: "DELETE"
      })
      resolve(deleteTodo);
      reject("Failed to remove item");
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const handleOnChange = (event) => {
    const isSelected = event.target.checked;
    if(isSelected){
      props.setCheckedItems([...(props.checkedItems), parseInt(props.id)]);
    } else {
      const index= props.checkedItems.indexOf(props.id);
      props.checkedItems.splice(index, 1);
      props.setCheckedItems(props.checkedItems)
    }
  }

    return (
      
      <div class="card mb-3" style={{maxwidth: 540}}>
      <div class="row g-0">
          <div class="col-md-1 mt-5">
              <input type="checkbox" className='my-checkbox' 
                onChange={(e) => {handleOnChange(e);} }/>    
          </div>
          <div class="col-md-2">
              <img src={props.img} height={150} width={150} />
          </div>
              <div class="col-md-9">
                  <div class="card-body">
                      <div class="col-md-10">
                          <div class="d-flex bd-highlight">
                          <div class="p-2 flex-fill bd-highlight">
                                  <h4>{props.name}</h4>
                                  <div class="row "> 
                                    <div class="col-md-4 text-decoration-underline">{props.title}</div>
                                    <div class="col-md-3">{props.desc}</div>
                                    <div class="col-md-3"><h5>Php {props.price}</h5></div>
                                    <div class="col-md-2"> <button class="button"
                                     onClick={(e)=> {removeItem(e)}}>Remove</button></div> 
                                </div>
                          </div> 
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
};