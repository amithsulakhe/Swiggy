import { useState, useEffect, useContext } from "react";
import React from "react";
import Resturentcard from "./Resturentcard";
import Shimmer from "./Shimmer";
import Specialoffer from "./Specialoffer";
import Caroselshimeer from "./Caroselshimeer";
import useBody from "./utils/useBody";
import usecarsoel from "./utils/usecarsoel";
import { Link } from "react-router-dom";
import Totalreasturent from "./Totalreasturent";
import { Usercontext } from "./Context";
import Loader from "./Loader.js";
import InfiniteScroll from "react-infinite-scroll-component";
// import { Fetch_api } from "../../Constants.js";
const Body = () => {
  const {btnRight,setbtnright,count,setcount,btnstyleleft,setbtnstyleleft,btnstyleright, setbtnstyleright}=usecarsoel()
const {resturentdata,specialoffers}=useContext(Usercontext)
  // console.log(resturentdata);
// console.log(specialoffers);
const  dummy=()=>{
  getinfinite()
}
const {getinfinite}=useBody()
  const btnleft = () => {
    if (count > 0) {
      setcount((prev) => prev - 1);
      setbtnstyleright({
        display: "block",
      });
    }
    if (count <= 1) {
      setbtnstyleleft({
        display: "none",
      });
    }
  };
  const btnright = () => {
    if (count <= parseInt(specialoffers.length/2)) {
      setcount((prev) => prev + 1);
      setbtnstyleleft({
        display: "block",
      });
    }
    if (count >= parseInt(specialoffers.length/2)) {
      setbtnstyleright({
        display: "none",
      });
    }
  };

  return (
    <>
      <div  className="special-offer">
        <button style={btnstyleleft} className="btn-left" onClick={btnleft}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div className="trending">
          <div style={btnRight} className="trending-new">
            {!specialoffers?.length ?  (
              <Caroselshimeer />
              
            ) : (
              
              specialoffers?.map((ele, index) => (
                <Specialoffer
                
                  special={ele}
                  key={ele?.data?.bannerId}
                ></Specialoffer>
              ))
            )}
          </div>
        </div>
        <button style={btnstyleright} onClick={btnright} className="btn-right">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="total-reasturent">
      <Totalreasturent/>
      </div>
      <div className="reasturent-flex">
        <InfiniteScroll  dataLength={resturentdata.length}  next={dummy}
          hasMore={true}
          loader={<><Shimmer/> <Loader/></>} >
        {
         (
          resturentdata?.map((ele, index) => (
            <Link key={index}  to={`/reasturent/${ele?.data?.data?.id?ele?.data?.data?.id:ele?.data?.id}`} style={{textDecoration:"none",color:"black",height:"max-content"}} >
            <Resturentcard propele={ele}  ></Resturentcard>
            </Link>
          ))
        )}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Body;
