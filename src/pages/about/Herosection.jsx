import React from 'react';


function Herosection() {
  return (
    <div className='block mb-[20px] overflow-hidden'>
      <div className="lg:h-[calc(100vh-25rem)] md:h-[calc(100vh-40rem)] h-[18rem] herobg w-screen bg-gray-400 relative"> 
       {/* welcome text container */}
       <div className="lg:w-[80rem] md:mx-5  md:h-[12rem] absolute lg:top-[7rem] top-[7rem] md:top-[14rem]  lg:left-[5rem] border-[3px] border-white mx-3 lg:mx-0 ">
          <div className="text-white">
            <h1 className='md:text-[4rem] text-xl font-bold p-4 leading-[4rem] capitalize text-center font-poppins'>Want to Know more about us?</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
       </div>
      </div>
    </div>
  )
} 

export default Herosection
