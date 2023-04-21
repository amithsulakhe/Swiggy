import React from 'react'
import { useState,useEffect } from 'react';
const usecarsoel = () => {
    const [btnRight, setbtnright] = useState({
        transform: "translateX(0px)",
      });
      const [count, setcount] = useState(0);
      const [btnstyleleft, setbtnstyleleft] = useState({
        display: "none",
      });
      const [btnstyleright, setbtnstyleright] = useState({
        display: "block",
      });

      useEffect(() => {
        setbtnright({
          transform: `translateX(${-310 * count}px)`,
        });
        // console.log(btnRight.transform);
      }, [count]);
      return {btnRight,setbtnright,count,setcount,btnstyleleft,setbtnright,setbtnstyleleft,btnstyleright, setbtnstyleright}
}

export default usecarsoel