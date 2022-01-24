import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { MyItemCard } from "./MyItemCard";
import PostItem from "./PostItem";
import './MyShopPage.css';
import {  Routes,  Route, Outlet } from 'react-router-dom';
import { DonationStatusIndicator } from '../../assets/ItemStatus';
import { displayItems } from '../../apis/Get-apis';

export default function MyShopPage() {

  const [PostButton, setPostButton] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    displayItems(setItems);
  })

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
              img={item.item_image}
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
          <div className='status-container mt-4'>
            <DonationStatusIndicator />
            <div className='status mt-4'>
              <Routes>
                <Route path='/my-shop/my-donation/reserved'/>
                <Route path='/my-shop/my-donation/in-process'/>
                <Route path='/my-shop/my-donation/shipped'/>
                <Route path='/my-shop/my-donation/cancelled'/>
                <Route path='/my-shop/my-donation/completed'/>
              </Routes>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}