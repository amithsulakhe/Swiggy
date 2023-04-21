import React from 'react'
import { createContext ,useState} from 'react'
export const Usercontext=createContext()
const Context = ({children}) => {
    const [city, setcity] = useState()
    const [resturentdata, setresturentdata] = useState([]);
    const [specialoffers, setspecialoffers] = useState([]);

const [displayfilter, setdisplayfilter] = useState("none")
const [displayoverlay, setdisplayoverlay] = useState("none")
    const [displaylocation, setdisplaylocation] = useState({
      position: "absolute",
      right: "100%"
    })
    const [locationvalue, setlocationvalue] = useState()
    const [typesort, settypesort] = useState("RELEVANCE")
  
    const [sorts, setsorts] = useState([])

const [user, setuser] = useState({
    cod:400,
    coord:{
      lat:12.9715987,
      lon:77.5945627
    }
})

  return (
    <Usercontext.Provider value={{specialoffers,setspecialoffers, sorts,setsorts,resturentdata,setresturentdata, displayoverlay,setdisplayoverlay, displayfilter,setdisplayfilter, city,setcity,displaylocation,setdisplaylocation,user,setuser,locationvalue,setlocationvalue,typesort,settypesort}}>
        {children}
    </Usercontext.Provider>
  )
}

export default Context
