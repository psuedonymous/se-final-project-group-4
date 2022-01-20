import './SearchBar.css';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';


export default function SearchBar({ placeholder, data }) {
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const onSubmitSearch = (e) => {
    e.preventDefault();

    new Promise((resolve, reject) => {
      const response = fetch(`http://localhost:5000/search-items?keywords=${keyword}`); //to add proxy
      resolve(response)
    })
      .then((response) => {
        new Promise((resolve, reject) => {
          const jsonData = response.json();
          resolve(jsonData);
        })
          .then((jsonData) => {
            setSearchResult(jsonData);
            console.log(jsonData);
          })
      })
  }

  const handleOnEnter = (e) => {
    if(e.key === "Enter") {
      onSubmitSearch(e)
    }
  }
  
    return (
        <div className="col-7 col-sm-4 col-md-5 col-lg-5 ms-auto">
            <div className="input-group">
                <input className="form-control" type="text" placeholder={placeholder} value={keyword}
                onChange={(e) => {setKeyword(e.target.value)}} 
                onKeyPress={(e) => handleOnEnter(e)} />
                <span>
                    <button className="btn search-btn" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>

{/* result display test */}

            {/* <div className="row justify-content-right">
                  {searchResult.map((result) => {
                      return (<ItemCard
                        id = {result.item_id} 
                        img={result.item_image} 
                        title={result.item_name} 
                        desc={result.item_desc} 
                        price={result.item_price} />)
                  })}
            </div> */}
     </div>
    )
}