import React from 'react';

export default function ItemCard(props) {
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <div class="text-center">
                    <img src={props.img} height={200} width={200} />
                </div>
                <div class="card-body ">
                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-title">{props.price}</h5>
                    <p class="card-text">{props.desc}</p>
                    <button class="btn btn-primary">Mine ❤️🦄</button>
                </div>
            </div>
        </div>
    );
};