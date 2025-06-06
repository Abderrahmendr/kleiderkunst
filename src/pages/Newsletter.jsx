import React from 'react'

const Newsletter = () => {
  return (
    <div className='mt-20'>
         {/* Heading Section */}
        <div className='flex justify-center  right-8 m-8'>
            <h1 
            className='uppercase text-[#343F2E] text-2xl
             md:text-4xl lg:text-6xl font-mono  ml-16
            font-bold
            '
            >A look at fashion <br/> turn towords
             <span className=' absolute 
             bg-stone-800 rotate-45 text-white rounded-lg 
              text-sm sm:text-md md:text-xl  uppercase font-black px-4 py-1 ml-4 mt-2
             '>news</span>
            </h1>
        
        </div>
              {/* Vertical Text */}
        <div className=" 
        absolute  left-8 lg:left-24
        grid grid-rows-3 -rotate-90 
        uppercase font-extrabold
        text-lg md:text-2xl lg:text-3xl 
        -mt-30 md:-mt-35 lg:-mt-40 font-mono
         
       "
        >
          <span className='text-[#343F2E]  '>our news</span>
          <span className='text-orange-500'>our news</span>
          <span className='text-[#343F2E]  '>our news</span>
          <span className='text-orange-500  '>our news</span>

           
        </div>

         {/* News Cards */}
         <div className='   flex flex-wrap  justify-center items-center gap-8 font-black mt-20'> 
            {/** first news */}
            <div className='uppercase font-mono text-[#343F2E] mb-10'>
                <img src="./image10.jpeg" className=' rounded-xl w-90 sm:w-90 md:w-90 lg:w-auto h-93   '/>
                <p className='m-2  mt-4 text-2xl'>revolotionizing runways:<br/>  the new age of sustainble <br/> fashion</p>
                <span className='text-gray-500 m-2  text-sm '>mon 24 April 2025</span>
            </div>
            {/**second news */}
            <div className='uppercase font-mono text-[#343F2E] '>
                <img src="./image8.jpeg" className='  rounded-xl w-90 h-93 -mt-8 md:-mt-18 lg:-mt-16'/>
                <p className='m-2 mt-4 text-2xl '>the rise of digital <br/> fashion shows</p>
                <span className='text-gray-500 m-2  text-sm '>mon 24 April 2025</span>
            </div>
          

        </div>
          <div className=' flex flex-wrap  justify-center items-center gap-20 mt-8 '>
         <div className='uppercase font-mono text-[#343F2E] '>
                <img src="./image9.jpg" className='  rounded-xl w-90 h-93 '/>
                <p className='m-2  text-xl '> upcycled fashion and <br/> the futur</p>
                <span className='text-gray-500 m-2  text-sm '>mon 24 April 2025</span>

            </div>
             <div className='uppercase font-mono text-[#343F2E] '>
                <img src="./image11.jpeg" className='  rounded-xl w-90 h-93 '/>
                <p className='m-2  text-xl '>who's making waves <br/> in fashion this year</p>
                <span className='text-gray-500 m-2  text-sm '>mon 24 April 2025</span>

            </div>
              <div className='uppercase font-mono text-[#343F2E] '>
                <img src="./image7.jpg" className='  rounded-xl w-90 h-93 '/>
                <p className='m-2  text-xl '>the untold stories of <br/>fashion  industry workers</p>
                <span className='text-gray-500 m-2  text-sm '>mon 24 April 2025</span>

            </div>
         </div>
               {/* Quote Section */}
        <div className=' 
         uppercase ml-8  mr-8 mt-8
         bg-[#343F2E] rounded-xl
         text-[#CCCCCC] uppercase font-black
          w-60%'
         >
            <h1 className='
              p-16 text-6xl flex-start
            '
            >elegency is in every <br/>third</h1>
            <span className=' flex pl-16 pb-8 '>especially suitable for a brand or collection that <br/>
             focuses on intricate details, quality and a timeless <br/> sense of style  </span>
        </div>
        
    </div>
  )
}

export default Newsletter
