import React, { useEffect } from "react";
import { useState } from "react";
import Popularcusines from "./Popularcusines";
const Search = () => {
  const [inputsearch, setinputsearch] = useState("");
  const [cuisinesdata, setcuisinesdata] = useState([])
  const handlesearch = (e) => {
    setinputsearch(e.target.value);
  };
  useEffect(()=>{
cuisinesgetdata()
  },[])
  async function cuisinesgetdata(){
    let data=await fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=15.8496953&lng=74.4976741")
    let json=await data.json()
    // console.log(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    setcuisinesdata(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    
  }
  return (
    <>
      <div className="search-bar">
        <div className="search-input">
          <input
            onChange={handlesearch}
            value={inputsearch}
            placeholder="Search for restaurants and food"
            type="text"
          />
        </div>
        <div className="search-icon">
          {!inputsearch ? (
            <i className="fa-solid fa-magnifying-glass"></i>
          ) : (
            <i onClick={() => setinputsearch("")} className="fa-solid fa-xmark"></i>
          )}
        </div>
      </div>
      <div className="popular">
        <h2><span>Popular Cusines</span></h2>
        <div className="popular-cusines">
        {

            cuisinesdata?.map((ele)=> < Popularcusines prop={ele} ></Popularcusines>)
            
        }
        </div>
      </div>
    </>
  );
};

export default Search;
