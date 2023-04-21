import React, { useContext, useEffect, useState } from "react";
import { Usercontext } from "./Context.js";
import { useContext } from "react";
import useBody from "./utils/useBody.js";
const Filters = () => {
  const [datafilter, setdatafilter] = useState("");
  const [formData, setFormData] = useState([]);
  const [newformdata, setnewformdata] = useState([]);
  const {
    displayfilter,
    setdisplayfilter,
    setdisplayoverlay,
    setresturentdata,user,
    setsorts,setspecialoffers,specialoffers,setdiaplayspecialoffer
  } = useContext(Usercontext);
  const { filters } = useBody();
  const removefilterhandler = () => {
    setdisplayfilter("none");
    setdisplayoverlay("none");
  };
  useEffect(() => {
    getfilterdata();
  }, [newformdata]);
  async function getfilterdata() {
    setresturentdata([]);


    let data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${user.coord.lat}&lng=${user.coord.lon}&sortBy=RELEVANCE&filters=%7B%22CUISINES%22%3A%5B%22${datafilter}%22%5D%7D&page_type=DESKTOP_WEB_LISTING`
    );
    let json = await data.json();  
    
    setsorts(json);

    // console.log(json);
    setresturentdata(
      json?.data?.cards[2]?.data?.data?.cards
        ? json?.data?.cards[2]?.data?.data?.cards
        : json?.data?.cards[0]?.data?.data?.cards
    );

  }
  const handlesubmitfilter = (event) => {
    event.preventDefault();
    setnewformdata(formData);
    // console.log(formData);
    setdatafilter(formData.join("%22%2C%22"));
    setdisplayfilter("none");
    setdisplayoverlay("none");

    // console.log(datafilter);
  };
  const handleInputChange = (event) => {
    if (event.target.checked) {
      const { value } = event.target;
      setFormData([...formData, value]);
    } else {
      const { value } = event.target;
      const updatedFormData = formData.filter((item) => item !== value); //American andra arabian
      setFormData(updatedFormData);
    }
  };

  return (
    <div style={{ display: displayfilter }} className="filter-div">
      <div className="filter-child">
        <h1>
          <i
            onClick={removefilterhandler}
            style={{ marginRight: "5px" }}
            className="fa-solid fa-xmark"
          ></i>{" "}
          Filters
        </h1>
      </div>
      <div className="cuisnes-container">
        <div className="cusine-title">cuisines</div>
        <form onSubmit={handlesubmitfilter} className="cusine-items">
          <div className="filtered-checkbox-container">
            {filters.map((e, index) => (
              <div className="allfilter" key={e.option}>
                <input
                  className="ite"
                  style={{
                    accentColor: "#fc8019",
                    width: "18px",
                    height: "18px",
                    color: "#fff",
                  }}
                  id={e.option}
                  type="checkbox"
                  name={e.option}
                  value={e.option}
                  onChange={handleInputChange}
                />
                <label htmlFor={e.option}>
                  {" "}
                  <h2>{e.option}</h2>
                </label>
              </div>
            ))}
          </div>
          <div id="search-reasturent">
            <input id="reset" type="reset" value="clear" />
            <button type="submit" id="searching">
              Search Reasturents
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
