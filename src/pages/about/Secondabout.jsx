import {Link} from 'react-router-dom'
import image from '../../components/images/image1.jpg'
import me from '../../components/images/image1.jpg'



const Secondabout = () => {
    
          

    return ( 
        <div className="container w-screen md:px-28 p-4 mb-12">
            <div className="top">

                <div className="upper flex justify-start items-center space-x-5 md:space-x-10 mb-5">
                    <h2 className='md:text-xl text-lg uppercase' >Achievement</h2>
                    <div className="md:w-[45%] w-[70%] h-[0.5px] bg-grayscale">
                    </div>
                </div>

                <div className="uppertext w-full mb-2 ">
                        <h2 className='md:text-[2rem] text-lg text-grayscale tracking-[0.01rem] pb-2' > Interior customization with EDYTING,</h2>
                        <h2 className='md:text-[2rem] text-lg text-grayscale tracking-[0.01rem]' >best quality with professional workers </h2>
                      </div>

            </div>

            <div className="bottom mt-5 flex flex-col md:flex-row md:h-[600px] w-full space-x-3">
                
                <div className=" md:w-[80%] overflow-hidden relative img-homepage ">
                   <div className="">
                   <img className='w-full' src={image} alt=""/>
                   </div>
                </div>

             
                
                {/* <div className="text md:self-center md:w-1/5">
                <p className='md:text-sm pt-5 md:pt-0 md:pr-16 leading-[1.2rem] text-grayscale'>
                Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                </p>
                <div  className="btn  text-white bg-primaryblue text-center p-2 w-2/5 mt-8 hover:scale-[1.06]">

                    <Link to='/About' className=''>
                    Learn More
                    </Link>
                </div>
                </div> */}

                {/* banner */}
                <div className="dropdown text-white bg-primaryblue w-2/12 hidden   md:flex flex-col items-center justify-center  p-2 space-y-auto " >

                    <div className="one text-center mb-24">
                        <h1 className='font-bold text-3xl mb-4 '>350+</h1>
                        <p className=' text-xl '>Project Completed</p>
                    </div>

                    <div className="two text-center mb-24">
                        <h1 className='font-bold text-3xl mb-4'>23+</h1>
                        <p className=' text-md text-xl'>Professional Teams</p>
                    </div>
                    <div className="three text-center">
                        <h1 className='font-bold text-3xl mb-4 '>15+</h1>
                        <p className=' text-md text-xl '>Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Secondabout;