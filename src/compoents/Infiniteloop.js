import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Usercontext } from './Context.js'


const Infiniteloop = () => {
    const {resturentdata,setresturentdata}=useContext(Usercontext)
    const [offsetvalue, setoffsetvalue] = useState(15)
    // console.log(resturentdata);

useEffect(()=>{
  getinfinitedata()

},[])
    async function getinfinitedata(){
        // let data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
        // let json=await data.json()
        // console.log(json.data.cards);
        // console.log("hello000"); 

    }
    
  return (
    <div>infiniteloop</div>
  )
}

export default Infiniteloop