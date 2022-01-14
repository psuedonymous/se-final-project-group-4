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
        <div className="col-3">
            <div class="card p-0 overflow-hidden h-60 shadow">
                <div class="text-center">
                    <img src={props.img} height={200} width={250} />
                </div>
                <div class="card-body ">
                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-title">{props.price}</h5>
                    <p class="card-text">{props.desc}</p>
                    <button type='button' class="rm-button" 
                    onClick={(e)=> {removeItem(e)}}>Remove</button>
                    <button type='button' class="lm-button float-end">Checkout</button>

                </div>
            </div>
        </div>
    );
};