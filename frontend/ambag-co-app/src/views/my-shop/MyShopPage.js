import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { MyItemCard } from "./MyItemCard";
import PostItem from "./PostItem";
import './MyShopPage.css';
import { Route, Routes } from 'react-router-dom';
import { StatusIndicator, ProgressStatus } from '../../assets/Status';

export default function MyShopPage() {

  const [PostButton, setPostButton] = useState(false);
  const [items, setItems] = useState([]);

  const displayItems = () => {
    new Promise((resolve, reject) => {
      const response = fetch("http://localhost:5000/getItems"); //to add proxy
      resolve(response)
    })
      .then((response) => {
        new Promise((resolve, reject) => {
          const jsonData = response.json();
          resolve(jsonData);
        })
          .then((jsonData) => {
            setItems(jsonData);
          })
      })
  }

  useEffect(() => {
    displayItems();
  }, [])

  return (
    <>
      <NavBar />
      <div className="row m-3">
        <div className="title">My Items</div>
      </div>

      <section className="container">
        <div className="row">
          {items.map((item) => {
            return (<MyItemCard
              items={items}
              img={item.item_desc}
              name={item.item_name}
              price={item.item_price}
              key={item.item_id}
              id={item.item_id} />)
          })}
        </div>
      </section>

      <button className="btn post-item-btn" onClick={() => setPostButton(true)}>+</button>
      {PostButton && <PostItem popupButton={setPostButton} />}
      <div className="row m-3">
        <div className="title"> My Donations </div>
        <div className='my-donation'>
          <div className='status-container'>
            <StatusIndicator />
            <div className='status mt-4'>
              {ProgressStatus.map((status) => {
                return <Routes>
                  <Route path={status.url}></Route>
                </Routes>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}