import React, { useContext } from "react";
import { Usercontext } from "./Context.js";
import Cartinneritems from "./Cartinneritems.js";
const CartCustomisable = ({setshowbox}) => {
    const {cartitems}=useContext(Usercontext)


  return (
    <div  className="item-name-price-parent">
    <div className="cart-customisable-items">
      <div className="item-name-price">
        <div className="item-name">
          <div className="icon">
            <i  className="fa-solid fa-square-caret-up"></i>
          </div>
          <div className="cart-item-name">
            Customize {cartitems && cartitems.name}
          </div>
          <div className="close-cart">
            <i onClick={()=>setshowbox(false)}  style={{cursor:"pointer"}} className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="item-price">
        ₹{cartitems && (Number(cartitems?.price/100)?(cartitems?.price/100):(cartitems?.defaultPrice/100))}
        </div>
      </div>
      <div className="addons-items">
{
    cartitems?.addons?.map((ele,i)=><a style={{textDecoration:"none",color:"black"}} href={"#"+ele.groupName} key={i} className="choise-items"> 
    {ele.groupName}
           </a>)
}
      </div>
      <div className="cart-item-names-price">
{
    cartitems?.addons?.map((ele,i)=><Cartinneritems key={i} prop={ele}></Cartinneritems>)
}
             
      </div>
 
    </div>
    <div className="item-button-name">
        <button>
           <div className="price-item">
            Total ₹{cartitems && (Number(cartitems?.price/100)?(cartitems?.price/100):(cartitems?.defaultPrice/100))}
           </div>
           <div className="price-item">
          Add items 
           </div>
        </button>
      </div>
    </div>
  );
};

export default CartCustomisable;
