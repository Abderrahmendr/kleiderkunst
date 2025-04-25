import React from 'react'
import Img from '../assets/img.jpg'
import {motion} from 'framer-motion'
import { BsStars } from "react-icons/bs";
    
import img1 from '../assets/img1.jpg';

const hero = () => {

  const items = Array(10).fill(null);
 
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

          
    </section>
    
  )
}

export default hero
