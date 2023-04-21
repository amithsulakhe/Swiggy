import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "./Context";
const Header = () => {
  const {setdisplaylocation,locationvalue,setdisplayoverlay}=useContext(Usercontext)
  // console.log(locationvalue);
const handlelocation=()=>{
  setdisplaylocation(
    {
      position: "absolute",
      left: "0%"
    }
  )
  setdisplayoverlay("block")
}
  return (
    <div className="header">
      <div className="navbar">
        <div className="nav1">
          <Link to="/">
            {" "}
            <img
              src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
              alt=""
            />
          </Link>

            <div onClick={handlelocation} className="camp" >
              <span className="c1">
                Camp
                <span></span>
              </span>
              <span className="c2">
                {`RFXX+V3F, Hirekodi, Camp, ${locationvalue?locationvalue:"Bangalore"}, Karnataka 590009, India` }
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
         
        </div>

        <div className="nav2">
          <div className="search same">
            <Link to="/search">
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <span>Search</span>
            </Link>
          </div>
          <div className="offers same">
            <Link to="/offers">
              <span>
                <i className="fa-solid fa-percent"></i>
              </span>

              <span>Offers</span>
            </Link>
          </div>
          <div className="help same">
            <Link to="/help">
              <span>
                <i className="fa-sharp fa-regular fa-circle-question"></i>
              </span>
              <span>Help</span>
            </Link>
          </div>
          <div className="sign same">
            <Link to="/signin">
              <span>
                <i className="fa-sharp fa-solid fa-mars-and-venus"></i>
              </span>

              <span>Signin</span>
            </Link>
          </div>
          <div className="cart same">
            <Link to="/cart">
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
