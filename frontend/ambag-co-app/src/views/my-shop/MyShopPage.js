import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { MyItemCard } from "./MyItemCard";
import PostItem from "./PostItem";
import './MyShopPage.css';
import { Route, Routes } from 'react-router-dom';
import { DonationStatusIndicator, DonationProgressStatus } from '../../assets/ItemStatus';
import { displayItems } from '../../apis/Get-apis';

export default function MyShopPage() {

  const [PostButton, setPostButton] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    displayItems(setItems);
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
          <div className='status-container mt-4'>
            <DonationStatusIndicator />
            <div className='status mt-4'>
              {DonationProgressStatus.map((status) => {
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