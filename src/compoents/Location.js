import React, { createContext, useContext, useEffect, useState } from "react";

import { Usercontext } from "./Context";
import Header from "./Header.js";
import { Link, useParams } from "react-router-dom";
function Location() {
  const {setdisplayoverlay,displayoverlay}=useContext(Usercontext)
  const {
    displaylocation,
    setdisplaylocation,
    city,
    setcity,
    user,
    setuser,
    locationvalue,
    setlocationvalue,
  } = useContext(Usercontext);
  const [recentsearch, setrecentsearch] = useState([]);

  // console.log(user._currentValu );
  useEffect(() => {
    getlocation();

    let value = JSON.parse(localStorage.getItem("recent-search"));
    if (!Array.isArray(value)) {
      value = [];
    }
    if(!value.includes(locationvalue)){
        value.push(locationvalue); // Push the new value to the array
        localStorage.setItem("recent-search", JSON.stringify(value)); // Set the modified array back to localStorage
        var recentsearchvalues = JSON.parse(localStorage.getItem("recent-search"));
        setrecentsearch(recentsearchvalues)
    recentsearchvalues.length > 5 ? recentsearchvalues.pop() : setrecentsearch(recentsearchvalues);
    }

  }, [locationvalue]);
  async function getlocation() {
    const locationdata = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationvalue}&appid=1576cc90b9e832bdcafb5105eadae9c5`
    );
    const json = await locationdata.json();
    if(!json.message){
      setuser(json);
      console.log(json);
    }
  }
// console.log(JSON.parse(localStorage.getItem("recent-search")));
  const handlesubmit = (ele) => {
    ele.preventDefault();
    console.log(city
      );
    setlocationvalue(city);
    setcity("");
    setdisplayoverlay(!displayoverlay)
    setdisplaylocation( { position:"absolute",
      right: "100%"});
  };
  const recenthandler = (ele) => {
    setlocationvalue(ele);
    setdisplayoverlay(!displayoverlay)
    setdisplaylocation({ position:"absolute",
      right: "100%"});
  };
  const handleremovelocation=()=>{
    setdisplaylocation({ position:"absolute",
          right: "100%"})
          setdisplayoverlay(!displayoverlay)


  }
  return (
    <> 
    <div className="location-name-parent">
      <div style={displaylocation} className="location-name">
        <i
          onClick={handleremovelocation}
          className="fa-solid fa-xmark btn-close"
        ></i>
        <form onSubmit={handlesubmit} className="location-input">
          <input
            value={city}
            onChange={(e) => setcity(e.target.value)}
            placeholder="Search for area,street name.."
            type="text"
          />
        </form>
        <div className="get-location" onClick={()=>recenthandler("bangalore")}>
          <i className="fa-solid fa-location-crosshairs"></i>
          <h3>Get current location</h3>
        </div>

        <div className="recent-location">
          <span className="recent-span">Recent Searches</span>
          {recentsearch
            .slice(0).reverse()
            .map((ele,index) =>
              ele && (
                <div key={index} className="recent" onClick={() => recenthandler(ele)}>
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <div className="sub-recent">
                    <h3>{ele}</h3>
                    <span>Karnataka,India</span>
                  </div>
                </div>
              ) 
            )}
        </div>
      </div>
      </div>
    </>
  );
}

export default Location;
