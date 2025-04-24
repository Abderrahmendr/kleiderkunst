import React from 'react'
import Img from '../assets/img.jpg'
import {motion} from 'framer-motion'
import { BsStars } from "react-icons/bs";
    
import img1 from '../assets/img1.jpg';

const hero = () => {

  const items = Array(10).fill(null);
  const categories = ['glasses', 'shirt', 'dress', 'bags', 'watches', 'caps', 'shoes'];
 
  return (
    <section>
         {/** HERO SECTION */}
     <div className=' flex items-center justify-center '>

     <img src={Img} alt="Hero" width='90%'  className='-mt-28' />
      <button className=' absolute left-14 mt-56 hover:animate-pulse rounded-full w-20 h-20 text-white bg-[#343F2E] hover:bg-orange-500  items-center justify-content font-bold text-sm p-4 cursor-pointer '>
        Shop Now
       </button>
     </div>
         {/** SCROLLING ANIMATION BAR */}        
     <div className='flex text-[#CCCCCC] font-bold p-8 text-5xl bg-[#343F2E] overflow-hidden'>
      <motion.div
        className='flex '
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
       {items.map((_,index)=> ( 
          <div key={index} className="flex items-center uppercase px-8">
                        <span className="px-4">Fashion</span>
            <BsStars className="text-orange-500" />
            <span className="px-4">Style</span>
            <BsStars className=" px-2 text-orange-500" />

          </div>
        ))}
      </motion.div>
     </div>
        
         {/** OUR STORY SECTION */}
         <div className='bg-[#d0d0d0]'>
        
          <div className=' 
          flex mt-16 items-center justify-end ml-[10rem]'
          >  
          <h1 
          className=' 
          text-7xl font-bold mr-10
          uppercase text-[#343F2E] font-mono '
          >
            live boldly.dress <br/>bravely
          </h1>
          <div className=" 
          absolute left-[8rem] 
          grid grid-rows-3 -rotate-90 
          uppercase font-extrabold
           text-3xl -mt-8 "
          >
            <span className='text-[#343F2E] mx-8'>our story</span>
            <span className='text-orange-500'>our story</span>
            <span className='text-[#343F2E] mx-8 '>our story</span>
             
          </div>
          </div> 
        {/** OUR BRAND */}

        <div className='flex items-center justify-center mt-4'>
          <img src={img1}  width={'88%'} height={'30%'} className='  ml-24 mt-8 '/>
        </div>
        
         </div>

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
           <div className='border border-white shadow-white shadow-md h-80 cursor-pointer m-2 p-2 rounded-lg'>
            <img src='./img1.jpg' width={'100%'} height={'100%'}/>
           </div>
           <div className='border border-white shadow-white shadow-md rounded-lg m-2 p-2
             h-80 cursor-pointer'>
            <img src='./img1.jpg' width={'100%'} height={'100%'}/>
           </div>
             {/**  second column */}
           <div className='border shadow-white  border-white rounded-lg m-2 p-2
           h-80 shadow-md cursor-pointer'>
            <img src='./img1.jpg' width={'100%'} height={'100%'}/>
           </div>
          
            <div className='cursor-pointer border-white border border-white shadow-white shadow-md   rounded-lg h-80 shadow-md m-2 p-2'>
            <img src='./img1.jpg' width={'100%'} height={'100%'}/>
           </div>
              {/** Third column */}
           <div className='cursor-pointer border-white border border-white shadow-white shadow-md  rounded-lg h-80 shadow-md m-2 p-2'>
            <img src='./img1.jpg' width={'100%'} height={'100%'}/>
           </div>
           <div className='cursor-pointer border-white border border-white shadow-white shadow-md  rounded-lg h-80 shadow-md m-2 p-2'>
            <img src='./img1.jpg' width={'100%'} height={'100%'}/>
            </div>
      

           </div>
            {/**button */}

            <div className='flex justify-center items-center mt-8 '>
              <button className='hover:bg-orange-500 border border-white rounded-full
               py-2 px-6  text-white font-mono font-bold uppercase cursor-pointer '>
                view all
              </button>
            </div>
         </div>
          
    </section>
    
  )
}

export default hero
