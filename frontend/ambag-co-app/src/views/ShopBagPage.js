import { NavBar } from "../components/NavBar";
import ShopBagItemCard from "../components/ShopBagItemCard";
import { useState, useEffect } from "react";
import { displayShopBagItems } from "../apis/Get-apis";
import './Shopbag.css';

export default function ShopBagPage(props) {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    displayShopBagItems(setItems);
  })


    return (
        <>
            <NavBar/>

            <section className="py-4 container" >
              <div class="row">
              </div>
              <div className="row justify-content-right">
                  {items.map((item) => {
                      return ( 
                      <ShopBagItemCard
                        id = {item.i_id}
                        img={item.i_image} 
                        title={item.i_name} 
                        desc={item.i_desc} 
                        price={item.i_price} 
                        checkedItems= {checkedItems}
                        setCheckedItems={setCheckedItems} />)
                  })}
              </div>
          </section>

          <section>
            <div className="col-md-11">
            <button type="button" className="float-end mb-5 checkout-button">Checkout</button>
            </div>
          </section>
        </>
    )
}