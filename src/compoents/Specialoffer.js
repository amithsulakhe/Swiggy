import React from 'react'

const Specialoffer = (props) => {
    const {creativeId}=props.special.data
    // console.log(props.special.data);
  return (
    <>
        <div className="special">
        <a href="">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${creativeId}`}alt="" />
        </a>
        </div>
        
      
        </>
    
  )
}

export default Specialoffer