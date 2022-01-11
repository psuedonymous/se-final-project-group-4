import ItemCard from "../components/ItemCard";
import { Items } from "../assets/Items";
import { NavBar } from "../components/NavBar";
import { useState, useEffect } from "react";
import { displayAllItems } from "../apis/Get-apis";


export default function Home() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    displayAllItems(setItems);
  }, [])

    return (
      <>       
        <NavBar/>
          <section className="py-4 container" >
              <div class="row">
              </div>
              <div className="row justify-content-right">
                  {items.map((item) => {
                      return (<ItemCard 
                        img={item.item_image} 
                        title={item.item_name} 
                        desc={item.item_desc} 
                        price={item.item_price} />)
                  })}
              </div>
          </section>
      </>
    );
};
