import { NavBar } from "../../components/NavBar";
import { useState } from "react";
import ItemCard from "../../components/ItemCard";
import { Categories } from "./categoriesButton";
import {SortByBar,} from "./sortbyBar";

export default function CatalogPage() {
  const [result, setResult] = useState([]);

  const displaySearchResult = () => {
    if(result.length == 0){
      return(<div> No items found </div>)
    } else {
      return (
        <div className="row ">
               
           <div class="col-3 col-md-2 col-lg-2">
               <div class="rightside">

                  <Categories />
               </div>
                                    
               
           </div>
                <div class="col" id="refresh">
                    <div class ="lesftside">
                <div className="row justify-content-left" >
                <div className="row m-3">
                <div className="col-3 col-md-3 col-lg-2 ms-auto">
                    <SortByBar/>
                    </div>
            </div> 
            
            {result.map((item) => {
                      return (<ItemCard
                        id = {item.item_id} 
                        img={item.item_image} 
                        title={item.item_name} 
                        desc={item.item_desc} 
                        price={item.item_price} />)
                  })}

                    </div>
                    </div>
                </div>
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