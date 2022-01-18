import React from 'react';
import './ShopbagItemCard.css';

// To change frontend layout/design
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

    return (

      <div class="card mb-3" style={{maxwidth: 540}}>
      <div class="row g-0">
          <div class="col-md-2">
              <img src={props.img} height={200} width={200} />
          </div>
              <div class="col-md-10">
                  <div class="card-body">
                      <div class="col-md-10">
                          <div class="d-flex bd-highlight">
                          <div class="p-2 flex-fill bd-highlight">
                                  <h4>{props.name}</h4>
                                  <div class="row "> 
                                    <div class="col-md-5  text-decoration-underline">{props.des}</div>
                                    <div class="col-md-2   "><h5>{props.price}</h5></div>
                                    <div class="col-md-3  ">{props.status}</div>
                                    <div class="col-md-2"> <button class="button" onClick={(e)=> {removeItem(e)}}>Remove</button></div> 
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