const Service = () => {
    let cards=[{image:'1',title:'President',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error voluptas et, fugit totam tenetur. Et maiores porro optio numquam.'},{image:'2',title:'Vice-President',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error voluptas et, fugit totam tenetur. Et maiores porro optio numquam.'},{image:'3',title:'General secretary',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error voluptas et, fugit totam tenetur. Et maiores porro optio numquam.'}]

    return ( 
        
       <div >
         <div className="lg:w-[83%] w-[83%] md:mx-2 md:w-full lg:mx-28 px-4 mb-12">
            {/* top */}
            <div className="top flex items-center space-x-8 mb-4">
                <h2 className='text-lg uppercase md:text-xl '> Executives</h2>
                <div className="md:w-[45%] w-[70%] h-[0.5px] ">
                </div>
            </div>
            {/* title */}
            <div className=" mb-4">
                <h2 className="capitalize text-2xl md:text-4xl font-medium"> Meet our proud executives</h2>
            </div>
            {/* text */}
            {/* cards container */}
            <div className="c-container  flex justify-between md:flex-row flex-col lg:w-[80%] md:w-full w-[80%] md:mx-auto space-y-4 md:space-y-0">
                {cards.map((card)=>(
                    <div className="md:w-[30%] border-[1px] border-lightgray shadow p-4 text-center rounded-lg" key={card.title}>
                        {/* top */}
                        <div className="w-36 h-36 rounded-full bg-slate-200 flex items-center justify-center mx-auto">
                            {card.image}
                        </div>
                        {/* header */}
                        <div className="capitalize font-semibold text-xl pt-4 text-grayscale">
                            {card.title}
                        </div>
                        {/* text */}
                        <div className=" text-semigray">
                            {card.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
     );
}
 
export default Service;