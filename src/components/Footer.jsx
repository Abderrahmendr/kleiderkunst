import React from 'react'
import { PiPants } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className='    
    font-mono uppercase p-8 px-4  left-0
    md:px-8 lg:px-16 m-8 
    gap-6 md:gap-12 lg:gap-24 sm:mt-8 cursor-pointer
    '>
         {/** CATEGPRIES SECTION */}
       <div className=' grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 sm:mt-20 lg:ml-16'>
       <div className=' '>
        <h1 className='text-black font-black '>categories</h1>
         <ul className='decoration-non uppercase text-gray-800  '>
            <li>shirt</li>
            <li>dress</li>
            <li>caps</li>
            <li>watches</li>
            <li>Pants</li>
         </ul>

       </div>

         {/** GENDER SECTION */}
         <div className='mt-4 md:mt-0.5'>
        <h1 className='uppercase text-black font-black '>by gender </h1>
        <ul className='decoration-non uppercase text-gray-800  cursor-pointer '>
        <li>Men</li>
            <li>Women</li>
            <li>kids</li>
        </ul>

       </div>

         {/** COMPANY SECTION */}
         <div className=' mt-4 md:mt-0.5 cursor-pointer'>
        <h1 className='uppercase text-black font-black '>Company</h1>
        <ul className='decoration-non uppercase text-gray-800  '>
            <li>About us </li>
            <li>collections</li>
            <li>term of us</li>
            <li>shipping terms</li>
        </ul>

       </div>
        {/** SEARCH BAR */}
       <div  className='  mt-4 md:-mt-4 uppercase  text-gray-800 relative' >

        <h1 className='text-black text-2xl font-black font-mono m-2'>subscribe for news<br/>letter</h1>
        <form action="" className='relative grid grid-cols-8'>
        <input type="text" placeholder='  YOUR EMAIL'
        className='border-white border w-60 h-12 p-2 rounded-full'/>

        {/** SEARCH BUTTON */}
        <button className='
          bg-orange-500  absolute   flex-wrap   left-34 mt-1
           p-2  rounded-full cursor-pointer
        '
        >
         subscribe
        </button>
        </form>
      
       </div>
       </div>
       {/** NEWSLETTER SECTION */}

      
    </div>
  )
}

export default Footer
