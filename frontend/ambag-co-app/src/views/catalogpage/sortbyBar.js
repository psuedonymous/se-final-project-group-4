/* eslint-disable no-undef */
import { NavDropdown } from "react-bootstrap";
import { Items } from "../../assets/Items";


export function SortByBar() {
    const sortLowest = e => {
        new Promise((resolve, reject)=>{
          const sort =  Items.sort((a, b) => (a.price) - (b.price));
          resolve(sort);
          reject("Failed to sort");
        })
        .catch((err) => {
          console.error(err)
        })
    }

    const sortHighest = e => {
        new Promise((resolve, reject)=>{
          const sort =  Items.sort((a, b) => (b.price) - (a.price));
          resolve(sort);
          reject("Failed to sort");
        })
        .catch((err) => {
          console.error(err)
        })
        
    }

    const updateDiv = e => {
      new Promise((resolve, reject)=>{
        const sort =  CatalogPage.reload;
        resolve(sort);
        reject("Failed to sort");
      })
      .catch((err) => {
        console.error(err)
      })
      
  }


 


return (
   <NavDropdown title={
      <span><i> Sort By </i></span>} align="end">
      <NavDropdown.Item>
          <button className="btn edit-btn"
              onClick={()=> sortHighest(true) && updateDiv(true) }>Price(highest)</button>
      </NavDropdown.Item>
      <NavDropdown.Item>
          <button className="btn edit-btn"
              onClick={()=> sortLowest(true)}>Price(lowest)</button>
      </NavDropdown.Item>
      <NavDropdown.Item>
          <button className="btn delete-btn" 
              onClick={()=> (true)}>Date</button>
      </NavDropdown.Item>
      <NavDropdown.Item>
          <button className="btn delete-btn" 
              onClick={()=> (true)}>Ratings</button>
      </NavDropdown.Item>
  </NavDropdown>)
}