import React from 'react'

const Shimmer = () => {
  return (
    <>
    {
        Array(20).fill("").map((e,i)=><div key={i} className='shimmer-cards'>
 <img></img>
  <div className='div1'></div>
  <div className='div2'></div>
        </div>)
    }
    </>
  )
}

export default Shimmer