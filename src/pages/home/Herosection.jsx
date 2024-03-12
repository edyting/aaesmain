import React from 'react';


function Herosection() {
  return (
    <div className='block'>
      <div className="lg:h-[calc(100vh-10rem)] herobg h-[20rem]  md:w-screen bg-gray-400 relative md:h-[35rem]">
       {/* welcome text container */}
       <div className="md:w-[40rem] md:h-[12rem] absolute md:top-[10rem] lg:top-[20rem] md:left-[5rem] mx-4 md:mx-0 top-[5rem] border-[3px]  border-white ">
          <div className="text-white">
            <h1 className='md:text-[4rem] font-bold p-4 text-4xl font-poppins '>Welcome to LOGO</h1>
            <p className='text-center font-roboto text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Herosection
