import ItemCard from "../components/ItemCard";
import { NavBar } from "../components/NavBar";
import { useState, useEffect } from "react";
import { displayAllItems, getCharities } from "../apis/Get-apis";
import CharityCard from "../components/CharityCard";


export default function Home() {
  const [items, setItems] = useState([]);
  const [charities, setCharities] = useState([]);
  
  useEffect(() => {
    displayAllItems(setItems);
    getCharities(setCharities);
  }, [])

    return (
      <>       
        <NavBar/>
          <section className="py-4 container" >
              <div class="row">
              <div className="title mb-5">  Feed </div>
              </div>
              <div className="row justify-content-right">
                  {items.map((item) => {
                      return (<ItemCard
                        id = {item.item_id} 
                        img={item.item_image} 
                        title={item.item_name} 
                        desc={item.item_desc} 
                        price={item.item_price} />)
                  })}
              </div>
          </section>

          <section className="py-4 container" >
              <div class="row">
              <div className="title mb-5"> Featured Charities </div>
              </div>
              
              <div className="row justify-content-right">
                  {charities.map((charity) => {
                      return (<CharityCard 
                        img={charity.char_image} 
                        title={charity.char_name} 
                        desc={charity.char_desc} 
                        price={charity.char_email} />)
                  })}
              </div>
          </section>
      </>
    );
};
