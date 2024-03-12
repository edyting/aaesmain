import React from 'react'

function Second() {
  return (
    <div className=' flex flex-col md:flex-row '>
     {/* leftside */}

      <div className="bg-muted md:w-[25rem] lg:mx-[10rem]  p-4 rounded-lg m-2">
        {/* contact us */}
      <div className="">
        <h1 className='font-bold text-lg'>Contact Us </h1>
        <p className='text-grey-300 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae dolorum quos iure iusto dolore?
        </p>
      </div>
      {/* info */}
      <div className="">
        {/* address */}
        <div className="">
            <h1 className='font-bold text-lg'>Address:</h1>
            <p  className='text-grey-300 text-sm'>Knust campus</p>
        </div>
        {/* phone */}
        <div className="">
            <h1 className='font-bold text-lg'>Phone:</h1>
            <p  className='text-grey-300 text-sm'>+233 4040440400</p>
        </div>
        {/* working ours */}
        <div className="">
            <h1 className='font-bold text-lg'>We are open on:</h1>
            <p>Monday-Friday</p>
            <p className='text-grey-300 text-sm'>8:00am-7:00pm</p>
            <p>Saturday:</p>
            <p className='text-grey-300 text-sm'>10:30am-5:30pm</p>
        </div>
        {/* email */}
        <div className="">
            <h1 className='font-bold text-lg'>E-mail:</h1>
            <a href='#'  className='text-grey-300 text-sm'>logo@gmail.com</a>
        </div>
      </div>
      </div>

      {/* right side */}
      <div className=" md:w-[34rem] pt- p-2 rounded-xl mt-4">
            <form action="">

                <div className=" flex flex-col md:flex-row gap-[15px]">
                <input className='border w-[97.1%] md:w-full border-primary rounded p-2 border-2' type="text" placeholder='Name' />
                <input className='border w-[97.1%] md:w-full border-primary rounded p-2 border-2' type="Last Name"  placeholder='Last Name'/>
                </div>

                <div className="">
                <input type="text" className='mt-4 border border-2  border-primary p-2 w-[97.1%] rounded' placeholder='Email'/>
                </div>

                <div className="">
                <input type="text" className='mt-4 border border-2  border-primary p-2 w-[97.1%] rounded' placeholder='Phone Number'/>
                </div>

                <div className="">
                    <textarea name="" className='mt-4 border border-2  border-primary p-2 w-[97.1%] rounded' id="" cols="20" rows="5"></textarea>
                </div>

                <input type="submit" className='bg-primary w-[5rem]  p-2 w-[97.1%] rounded' value='submit'/>

            </form>
      </div>
     




    </div>
  )
}

export default Second
