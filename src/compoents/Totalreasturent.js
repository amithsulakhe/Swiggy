import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import useBody from "./utils/useBody.js";
import { getlocationdata } from "../../Constants.js";
import { Usercontext } from "./Context.js";
import { useContext } from "react";
import { useState } from "react";
const Totalreasturent = () => {

  const { settypesort,setdisplayfilter,setdisplayoverlay,sorts} = useContext(Usercontext);
 
  // json?.data?.sorts
  // console.log(sorts.data.cards[2].data.data.totalRestaurants);
  const typehandler = (ele) => {
    settypesort(ele);
  

  };

  const filterhandler=()=>{
    setdisplayfilter("block")
    setdisplayoverlay("block")

  }
  return (
    <>
      <div className="total-res">
        <h1 style={{ fontSize: "28px", fontWeight: 600 }}>
          {sorts?.data?.cards[2]?.data?.data?.totalRestaurants
            ? sorts?.data?.cards[2]?.data?.data?.totalRestaurants
            : sorts?.data?.cards[0]?.data?.data?.totalRestaurants}{" "}
          restaurants
        </h1>
      </div>
      <div className="filters">
        <div className="searching"></div>
        {sorts?.data?.sorts?.map((ele) => (
          <button
      
            onClick={() => typehandler(ele.key)}
            key={ele.key}
            className={"type"+" "+ele.key}
          >
            {ele.title}
          </button>
        ))}
        <div onClick={filterhandler} className="filter">Filters<i style={{color:"#ffa700"}} className="fa-solid fa-filter"></i></div>
      </div>
    </>
  );
};

export default Totalreasturent;
