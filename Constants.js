
export const getlocationdata=async (page,inputdata)=>{
    // console.log(user);
    // const {lat,lon}=user.coord
    
    // // console.log(type);
    // // console.log(user.cod);
    // if(user.cod===200){
        
    //     let data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&sortBy=${type}&page_type=DESKTOP_WEB_LISTING`);
    //     let json = await data.json();
    //     return json
    // }
    // else{
    //     let data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&sortBy=${type}&page_type=DESKTOP_WEB_LISTING`);
    //     let json = await data.json();
    //     return json
    // }

    const Data=await fetch(`https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant?location=${inputdata}&page=${page}`)
    console.log("hi");
    const Rescards=await Data.json()
    return Rescards
    
}
export const getparticulardata=async (user,resid)=>{
    const {lat,lon}=user.coord

    if(user.cod===200){
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${resid}&submitAction=ENTER`);
        let json = await data.json();
        return json
    }
    else{
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resid}&submitAction=ENTER`);
        let json = await data.json();
        return json
    }
}
export const fetchoffsetdata=async (user,offsetvalue)=>{
    const {lat,lon}=user.coord
        let data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&offset=${offsetvalue}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
        let json=await data.json()
        return json
         
}