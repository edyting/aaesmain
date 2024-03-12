import React, { useEffect, useState } from 'react'
import Herosection from './Herosection'
import Second from './Second'
import Eventsection from './Eventsection'



function Home() {

// const location = useLocation();






  useEffect(()=>{
    window.scrollTo(0,0)
},[]);

// if (location.pathname === location.pathname) {
//   setActive(true);
// }else{
//   setActive(false);
// }


  return (
    <div>
      <Herosection />
      <Second/>
      <Eventsection/>
      
    
    </div>
  )
}

export default Home
