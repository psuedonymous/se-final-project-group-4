import React from 'react';
import './ShopbagItemCard.css';

// To change frontend layout/design
export default function ShopBagItemCard(props) {
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
                    <button type='button' class="lm-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};