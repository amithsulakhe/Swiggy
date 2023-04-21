import React from 'react'

const Popularcusines = ({prop}) => {

  return (
          <div  className="cusines">
            <a href="">
              <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${prop.imageId}`}
                alt="cusine"
              />
         
            </a>
          </div>
   

        
  )
}

export default Popularcusines