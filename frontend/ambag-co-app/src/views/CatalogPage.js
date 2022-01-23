import { NavBar } from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import ItemCard from "../components/ItemCard";

export default function CatalogPage() {
  const [result, setResult] = useState([]);

  const displaySearchResult = () => {
    if(result.length == 0){
      return(<div> No items found </div>)
    } else {
      return (
        <div className="row justify-content-right">
                  {result.map((item) => {
                      return (<ItemCard
                        id = {item.item_id} 
                        img={item.item_image} 
                        title={item.item_name} 
                        desc={item.item_desc} 
                        price={item.item_price} />)
                  })}
              </div>
      )
    }
  }

    return (
        <>
            <NavBar toDisplay={true} results={setResult} />

            <section className="py-4 container" >
              <div class="row">
              <div className="title mb-5"> </div>
              </div>
              {displaySearchResult()}
          </section>
        </>
    )
}