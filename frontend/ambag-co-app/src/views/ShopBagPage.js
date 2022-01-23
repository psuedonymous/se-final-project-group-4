import { NavBar } from "../components/NavBar";
import ShopBagItemCard from "../components/ShopBagItemCard";
import { useState, useEffect } from "react";
import { displayShopBagItems } from "../apis/Get-apis";
import { useNavigate } from "react-router-dom";
import './Shopbag.css';
import { createBrowserHistory } from "history";

export default function ShopBagPage() {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const navigate = useNavigate();
  const history = createBrowserHistory();

  const navigateToShop = (e) => {
    e.preventDefault();
    navigate('/catalog')
  }

  useEffect(() => {
    displayShopBagItems(setItems);
  }, [])

  const handleCheckout = (checkedItems) => (e) => {
    e.preventDefault();
    console.log(checkedItems)
    history.push(`/checkout/deliver?items=${checkedItems.toString()}`, {checkedItems : checkedItems.toString()})
  }

  return (
    <>
      <NavBar />
      {items.length === 0 ?
        <div className='container'>
          <div className='status-container'>
            <div className='d-flex justify-content-center align-items-center empty-bag-status'>
              <div className="col-2">Your bag is empty.</div>
              <button className="btn shop-btn"
                onClick={navigateToShop}>
                Shop here
              </button>
            </div>
          </div>
        </div> : <div>
          <section className="py-4 container" >
            <div className="row">
            </div>
            <div className="row justify-content-right">
              {items.map((item) => {
                return (
                  <ShopBagItemCard
                    id={item.i_id}
                    img={item.i_image}
                    title={item.i_name}
                    desc={item.i_desc}
                    price={item.i_price}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems} />)
              })}
            </div>
          </section>
          <section>
            <div className="col-md-11">
              <button type="button" className="float-end mb-5 checkout-button"
              onClick={handleCheckout(checkedItems)}>Checkout</button>
            </div>
          </section>
        </div>}
    </>
  )
}