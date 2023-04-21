import React, { useEffect, useState } from "react";
import Reasturentinner from "./Reasturentinner.js";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "./Context.js";
import { getparticulardata } from "../../Constants.js";
const Reasturentinnerfetch = () => {
  const { resid } = useParams();
  const {user,setdisplaylocation} = useContext(Usercontext);
  // console.log(user.coord.lon);

  const [innerdata, setinnerdata] = useState([]);
  const [abouthotel, setabouthotel] = useState({});
  useEffect(() => {
    getdata();
  }, [user]);
  async function getdata() {
    let json = await getparticulardata(user,resid)
    let modifiedata =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1);
    // console.log(json.data.cards);
    setabouthotel(json?.data?.cards[0]?.card?.card?.info);
    setinnerdata(modifiedata);
  }
  return (
    <>
      <div className="reasturent-inner">
        <div className="hotel-name">
          <div className="container-1">
            <h2>{abouthotel.name}</h2>
            <p>{abouthotel?.cuisines?.join(",")}</p>
            <p>
              {abouthotel.areaName} {abouthotel?.sla?.lastMileTravelString}{" "}
            </p>
          </div>
          <div className="hotel-btn">
            <button className="h-btn">
              <p className="h-btn-p1">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                {abouthotel.avgRating}
              </p>
              <p className="h-btn-p2">{abouthotel.totalRatingsString}</p>
            </button>
          </div>
        </div>

        <div className="container-2">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
            alt="ride"
          />
          <p>{abouthotel?.feeDetails?.message}</p>
        </div>
        <div className="container-3">
          <li>
            <span style={{ fontSize: "20px" }}>
              <i className="fa-solid fa-clock"></i>
            </span>
            {abouthotel?.sla?.slaString}
          </li>
          <li>
            <span className="rupee">₹</span>
            {abouthotel.costForTwoMessage}
          </li>
        </div>
        {innerdata?.map((ele, index) => {
          return (
            ele.card.card.title && (
              <Reasturentinner
                key={ele?.card?.card?.title}
                title={ele?.card?.card?.title}
                data={ele?.card?.card?.itemCards || ele?.card?.card?.categories}
              ></Reasturentinner>
            )
          );
        })}
      </div>
    </>
  );
};

export default Reasturentinnerfetch;
