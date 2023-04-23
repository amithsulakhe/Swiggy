import { useState,useEffect, useContext } from "react";
import { Fetch_api, getlocationdata } from "../../../Constants.js";
import { Usercontext } from "../Context.js";
import { useContext } from "react";
import { fetchoffsetdata } from "../../../Constants.js";
const useBody=()=>{
const {resturentdata,setresturentdata,sorts,setsorts,specialoffers,setspecialoffers,user,typesort}=useContext(Usercontext)

    const [filters, setfilters] = useState([])
    const [offsetvalue, setoffsetvalue] = useState(15)
    useEffect(() => {
      getdata();
    },[user,typesort]);



    async function getdata() {
    setresturentdata([])
      const json=await getlocationdata(user,typesort)
      if(typesort=="RELEVANCE"){
        setresturentdata(json.data.cards[2].data.data.cards);
        // console.log(json);
        setspecialoffers(json.data.cards[0].data.data.cards);
        setsorts(json)
        setfilters(json.data.filters[0].options)
        
      }
      else{
        setresturentdata(json.data.cards[0].data.data.cards);
        setsorts(json)
        setfilters(json.data.filters[0].options)
      }
    }
    // useEffect(()=>{
    //   getinfinite()
    // },[offsetvalue])
   async function getinfinite(){
    
      let json =await fetchoffsetdata(user,offsetvalue)

      setoffsetvalue(offsetvalue+16)
      setresturentdata((pre)=>[...pre,...json.data.cards])
   
    }


      
    
      // let json=await fetchoffsetdata(user,offsetvalue)
      // console.log(json);
    
    return {resturentdata,specialoffers,sorts,setresturentdata,filters,getinfinite}
}
export default useBody;