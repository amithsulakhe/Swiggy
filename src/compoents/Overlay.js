import React, { useContext } from 'react'
import { Usercontext } from './Context.js'
import { useContext } from 'react';

const Overlay = () => {
  const {displayoverlay,setdisplayoverlay}=useContext(Usercontext);
  return (
<div style={{display:displayoverlay}} className="over-lay">
    
</div>
  )
}

export default Overlay