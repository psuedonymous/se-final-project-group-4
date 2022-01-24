import React from 'react';
import { useState } from 'react';


export default function ItemCard(props) {
  //account to set when signup/login is done
  const [account, setAccount] = useState(2);
  const [disable, setDisable] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const mineItem = (theItem) => {
    new Promise((resolve, reject) => {
      const result = fetch('http://localhost:5000/add-to-bag', {
        method: 'POST',
        body: JSON.stringify({
          account_no: account,
          item: props.id
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      resolve(result);
      reject("Failed to add to bag")
    }).then((result) => {
      new Promise((resolve, reject) => {
        const theR = result.json();
        resolve(theR)
      })
    }).catch((err) => {
      console.error(err)
    })
  }


  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <div class="text-center">
          <img src={props.img} height={200} width={200} onClick={handleShow} />
        </div>
        <div class="card-body ">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-title">{props.price}</h5>
          <p class="card-text">{props.desc}</p>
          <button class="btn btn-primary" disabled={disable}

            //Need to remove reserved items on Home
            onClick={(e) => { mineItem(e); setDisable(true) }} >Mine ❤️🦄</button>
        </div>
      </div>
    </div>
  );
};