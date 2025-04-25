import React from 'react'

const Products = () => {

  const categories = ['glasses', 'shirt', 'dress', 'bags', 'watches', 'caps', 'shoes'];


  return (
    <div className=''>
        {/** OUR COLLECTIONS */}

        <div className=' bg-[#343F2E] rounded-lg mx-10  mt-10'>
        
        {/** Title of section */}
        <div>
          <div className='flex items-center justify-center '>
          <h1 className='
          flex items-center justify-center 
          text-6xl text-white font-extrabold
           uppercase p-10 ml-8 gap-x-8'
           >our collection <br/>for you</h1>
        
            <span className='rotate-45 bg-stone-800 text-white font-mono rounded-lg   p-2'>New Arrival</span>
            <span className='rotate-55  bg-stone-800 text-white  font-mono rounded-lg   p-2 -ml-10 '>New Arrival</span>
            <span className='rotate-75  bg-stone-800 text-white font-mono rounded-lg    p-2 -ml-16 '>New Arrival</span>

            
          </div>
        <div className=" 
        absolute left-[8rem] 
        grid grid-rows-3 -rotate-90 
        uppercase font-extrabold
         text-lg -mt-32 font-mono
         
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
          <nav className='flex   justify-center list-none  '> 
            <ul className='flex'>
              {
                categories.map((item,index)=>{
                 return <li 
                 key={index}
                 className='p-2 m-2'
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
         
         <div className='grid grid-cols-3  gap-0 mx-20'>
          {/**  first column */}
         <div className='border border-white shadow-white shadow-md h-90 cursor-pointer m-2 p-2 rounded-lg'>
          <img src='./image6.jpeg' className='h-75 w-full'/>
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
         <div className='border border-white shadow-white shadow-md  h-90 rounded-lg m-2 p-2
           h-80 cursor-pointer'>
          <img src='./image5.jpeg'className='h-75 w-full'/>
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
           {/**  second column */}
         <div className='border shadow-white  border-white h-90 rounded-lg m-2 p-2
         h-80 shadow-md cursor-pointer'>
          <img src='./image4.jpeg'className='h-75 w-full'/>
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
        
          <div className='cursor-pointer border-white border border-white shadow-white shadow-md h-90   rounded-lg h-80 shadow-md m-2 p-2'>
          <img src='./image3.jpeg' className='h-75 w-full'/>
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
            {/** Third column */}
         <div className='cursor-pointer border-white border border-white shadow-white shadow-md h-90  rounded-lg h-80 shadow-md m-2 p-2'>
          <img src='./img1.jpg' className='h-75 w-full' />
          <div className='text-white uppercase font-bold font-mono'>
          <span>Basic black</span>
          <br/>
          <span>99$</span>
          </div>
         </div>
         <div className='cursor-pointer border-white border border-white shadow-white shadow-md h-90  rounded-lg h-80 shadow-md m-2 p-2'>
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
