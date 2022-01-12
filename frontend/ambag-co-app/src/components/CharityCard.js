import React from 'react';
import './CharityCard.css';

export default function CharityCard(props) {
    return (
        <div className="col-6">
            <div class="card p-0 overflow-hidden h-60 shadow">
                <div class="text-center">
                    <img src={props.img} height={200} width={400} />
                </div>
                <div class="card-body ">
                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-title">{props.price}</h5>
                    <p class="card-text">{props.desc}</p>
                    <button type='button' class="lm-button">Learn More</button>
                </div>
            </div>
        </div>
    );
};