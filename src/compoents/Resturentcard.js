import React from 'react'
import { img_cdn } from '../../Constant';
const Resturentcard = ({propele}) => {
    const {costForTwoString, name, cloudinaryImageId, cuisines, avgRating, slaString, aggregatedDiscountInfo} = propele.data.data
    ? propele.data.data
    : propele.data;
  
    let styles={
        backgroundColor: "#48c479",


    }
    if(avgRating<4){
         styles={
            backgroundColor:"#db7c38"
        }
    }
    let offerstyle;
    if(propele?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta){
        offerstyle={
            display: "block",
            fontWeight: 700,
            color:" #8a584b",
            fontSize: "15px",
        }
    }
    else{
        offerstyle={
            display:"none"
        }
    }
  return (
       <>
                <div className="cards">
                        <div className="img">
                            <img src={img_cdn+cloudinaryImageId} alt="food"/>
                        </div>
                        <div className="name">
                            <div className="food-name">
                                {name}
                            </div>
                            <div className="cuisines">
                               {cuisines.join(",")}
                            </div>
                        </div>
            
                        <div  className="ratings">
                            <div style={styles} className="rates">
                                <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                <span>{avgRating}</span>
                            </div>
                            <div className="">.</div>
                            <div  className="location">
                                {slaString} 
                            </div>
                        <div className="">
                            .
                        </div>
                        <div className="price">
                            {costForTwoString}
                        </div>
                        
            
                        </div>
                        
                        <div style={offerstyle} className="percentage-offer">
                        <i className="fa-solid fa-tag"></i>
{ 
 propele?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
                        </div>
                        <div className="quick">
                            <span>quick view</span>
                        </div>
                    </div>
                    
                
            
            </>

        
    

  )
}

export default Resturentcard