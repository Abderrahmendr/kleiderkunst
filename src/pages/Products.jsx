import React from 'react'

const Products = () => {

  const categories = ['glasses', 'shirt', 'dress', 'bags', 'watches', 'caps', 'shoes'];


  return (
    <div className='max-w-full ml-4 mr-4'>
        {/** OUR COLLECTIONS */}

        <div className='   bg-[#343F2E] rounded-lg   mt-10 px-10' >
        
        {/** Title of section */}
        <div> 
          <div className='flex items-center justify-center text-wrap'>
          <h1 className='
          flex items-center justify-center text-xl mr-20 md:text-4xl
          lg:text-6xl text-white font-extrabold
           uppercase p-10 ml-20 gap-x-8
           
           '
           >our collection <br/>for you</h1>
     
          </div>
          <div className=' absolute flex  right-0 -mt-16  sm:text-sm md:text-md lg:text-lg text-xs '>
           <span className=' 
            rotate-75 bg-stone-800 text-white -mr-4
             font-mono rounded-lg   px-3 py-2 
               sm:text-sm md:text-md lg:text-lg text-xs  
             '>New Arrival</span>
            <span className='rotate-55  bg-stone-800 text-white 
             font-mono rounded-lg  text-l sm:text-base  -mx-16 px-3 py-2  
             sm:text-sm md:text-md lg:text-lg text-xs  
             '>New Arrival</span>
            <span className='rotate-75  bg-stone-800 text-white
             font-mono rounded-lg   mr-4 text-l sm:text-base  px-3 py-2  
             sm:text-sm md:text-md lg:text-xl text-xs  
              '>New Arrival</span>
           </div>
        <div className=" 
        absolute sm:left-[2rem] md:left-[4rem] lg:left-[4rem] 
        grid grid-rows-3 -rotate-90 
        uppercase font-extrabold
         text-xs  -mt-28 lg:-mt-38 font-mono
         sm:text-sm md:text-md lg:text-lg
       "
        >
          <span className='text-white '>collections</span>
          <span className='text-orange-500'>collections</span>
          <span className='text-white  '>collections</span>
          <span className='text-orange-500  '>collections</span>

           
        </div>
        </div>
         {/** Categories */}

         <div >
          <nav className='flex   justify-center items-center list-none  '> 
            <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 '>
              {
                categories.map((item,index)=>{
                 return <li 
                 key={index}
                 className='p-2 m-2
                
                 '
                 >
                  <button className='
                  border border-white 
                  text-white uppercase 
                   rounded-full 
                   hover:bg-orange-500 
                   px-2 py-1
                   cursor-pointer
                   '>
                    {item}
                  </button>
                 </li>
                })
              }
            </ul>
          </nav>

         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap mx-4 sm:mx-6 md:mx-10 lg:mx-20">
         {/**  first column */}
         <div className="border border-white shadow-white shadow-md ml-10 max-w-80 sm:max-w-80 md:max-w-80   cursor-pointer m-2 p-2 rounded-lg">
            <img src="./image6.jpeg"   className="w-full  h-75   " />
            <div className="text-white uppercase font-bold font-mono mt-2">
              <span>Basic black</span>
              <br />
              <span>$99</span>
            </div>
 
         </div>        
          <div className="border border-white shadow-white shadow-md ml-10 max-w-80 sm:max-w-80 md:max-w-80   cursor-pointer m-2 p-2 rounded-lg">

          <img src='./image5.jpeg'className='h-75 w-full'/>
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
           {/**  second column */}
           <div className="border border-white shadow-white shadow-md ml-10 max-w-80 sm:max-w-80 md:max-w-80   cursor-pointer m-2 p-2 rounded-lg">

          <img src='./image4.jpeg'className='h-75 w-full'/>
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
        
         <div className="border border-white shadow-white shadow-md ml-10 max-w-80 sm:max-w-80 md:max-w-80   cursor-pointer m-2 p-2 rounded-lg">
          <img src='./image3.jpeg' className='h-75 w-full'/>
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
            {/** Third column */}
            <div className="border border-white shadow-white shadow-md ml-10 max-w-80 sm:max-w-80 md:max-w-80   cursor-pointer m-2 p-2 rounded-lg">
            <img src='./img1.jpg' className='h-75 w-full' />
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
         <div className="border border-white shadow-white shadow-md ml-10 max-w-80 sm:max-w-80 md:max-w-80   cursor-pointer m-2 p-2 rounded-lg">
          <img src='./image2.jpeg'  className='h-75 w-full' />
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
          </div>
    

         </div>
          {/**button */}

          <div className='flex justify-center items-center mt-8 p-8 '>
            <button 
            className='hover:bg-orange-500 border border-white rounded-full
             py-2 px-6  text-white font-mono font-bold uppercase cursor-pointer '>
              view all
            </button>
          </div>
       </div>
    </div>
  )
}

export default Products
