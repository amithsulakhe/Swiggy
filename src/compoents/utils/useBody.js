import { useState,useEffect, useContext } from "react";
import { Fetch_api, getlocationdata } from "../../../Constants.js";
import { Usercontext } from "../Context.js";
import { useContext } from "react";
import { fetchoffsetdata } from "../../../Constants.js";
const useBody=()=>{
const {resturentdata,setresturentdata,sorts,setsorts,specialoffers,setspecialoffers,user,typesort}=useContext(Usercontext)

    const [filters, setfilters] = useState([])
    const [offsetvalue, setoffsetvalue] = useState(15)
    const [page,setPage]=useState(0)
    useEffect(() => {
      getdata();
    },[user,typesort]);



    async function getdata() {
    // setresturentdata([])
      // const json=await getlocationdata(user,typesort)
      // // console.log(json);
      // if(typesort=="RELEVANCE"){
      //   setresturentdata(json?.data?.cards[2]?.data?.data?.cards);
      //   // console.log(json);
      //   setspecialoffers(json?.data?.cards[0]?.data?.data?.cards);
      //   setsorts(json)
      //   setfilters(json?.data?.filters[0]?.options)
        
      // }
      // else{
      //   setresturentdata(json?.data?.cards[0]?.data?.data?.cards);
      //   setsorts(json)
      //   setfilters(json?.data?.filters[0]?.options)
      // }

      try{
        const ResData=await getlocationdata(page,"banglore")
        if(page==0){
          setresturentdata(ResData?.data)
          // setFilterRestaurant(ResData?.data)
          // setTotalOpenRestaurant(ResData?.total)
        }else{
          setresturentdata(prev=>[...prev,...ResData?.data])
          // setFilterRestaurant(prev=>[...prev,...ResData?.data])
        }
      }catch(err){
        console.log(err);
      } 
    }
    // useEffect(()=>{
    //   getinfinite()
    // },[offsetvalue])
   async function getinfinite(){
    
      // let json =await fetchoffsetdata(user,offsetvalue)

      // setoffsetvalue(offsetvalue+16)
      // setresturentdata((pre)=>[...pre,...json.data.cards])

      setPage(prev=>prev+1)
      getdata()
   
    }


      
    
      // let json=await fetchoffsetdata(user,offsetvalue)
      // console.log(json);
    
    return {specialoffers,sorts,filters,getinfinite}
}
export default useBody;