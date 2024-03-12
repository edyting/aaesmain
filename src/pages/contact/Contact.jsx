import React, { useEffect } from 'react'
import Herosection from './Herosection'
import Second from './Second'
import Maplocate from './Maplocate'

function Contact() {
  
  useEffect(()=>{
    window.scrollTo(0,0)
},[]);

  return (
    <div>
      <Herosection/>
      
      <Maplocate/>

      <Second/>
    </div>
  )
}

export default Contact
