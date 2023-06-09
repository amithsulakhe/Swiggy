import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Usercontext } from "./Context.js";
function Reasturentinner({ data, title,showbox,setshowbox }) {
  //  console.log(data,title);
 const{cartitems,setcartitems}= useContext(Usercontext)
  const [datahide, setdatahide] = useState({
    display: "flex",
  });
  const [btnborder, setbtnborder] = useState({
    borderBottom: "0px solid",
  });
  const hidehandler = () => {
    const newDisplay = datahide.display === "flex" ? "none" : "flex";
    const newBtnBorder =datahide.display === "flex" ? "1px solid" : "0px solid";

    setdatahide({ display: newDisplay });
    setbtnborder({ borderBottom: newBtnBorder });
  };
  const additemtocart=(element)=>{
    // console.log(element);
    setcartitems(element)
    if(element.addons){
      setshowbox(!showbox)
    }

    console.log(cartitems);
  }
  return (
    <>
      <div className="inner-items">
        <button
          style={btnborder}
          onClick={hidehandler}
          className="inner-item-btn"
        >
          <h3>
            {title}({data.length})
          </h3>
          <span>
            {datahide.display === "flex" ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </span>
        </button>
        {data.map((ele, index) =>
          ele.itemCards ? (
            <Reasturentinner key={index} title={ele.title} data={ele.itemCards}></Reasturentinner>
          ) : (
            <div style={datahide} key={index} className="inner-item">
              <div className="inner-item-content1">
                <li className="li1">
                  <i className="fa-solid fa-square-caret-up"></i>
                </li>
                <li className="li2">{ele.card.info.name}</li>
                <li className="li3">
                  ₹
                  {ele.card.info.price / 100 ||
                    ele.card.info.defaultPrice / 100}
                </li>
                <li className="li4">{ele.card.info.description}</li>
              </div>
              <div className="inner-item-content2">
                <button>
                  <img
                    style={
                      ele.card.info.imageId
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${ele.card.info.imageId}`}
                    alt=""
                  />
                  <p onClick={()=>additemtocart(ele.card.info)}>Add <span style={{fontSize:"10px",color:"black",fontWeight:600}}>{ele.card.info.addons && "Customisable"}</span></p>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Reasturentinner;
