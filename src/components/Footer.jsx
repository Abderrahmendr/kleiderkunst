import React from 'react'
import { PiPants } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className=' grid grid-cols-3 font-mono px-4 md:px-8 lg:px-16 m-8 gap-x-0.5'>
         {/** CATEGPRIES SECTION */}
       <div>
        <h1 className='uppercase text-black font-black '>categories</h1>
         <ul className='decoration-non uppercase text-gray-800  '>
            <li>shirt</li>
            <li>dress</li>
            <li>caps</li>
            <li>watches</li>
            <li>Pants</li>
         </ul>

       </div>

         {/** CATEGPRIES SECTION */}
         <div>
        <h1 className='uppercase text-black font-black '>categories</h1>

       </div>

         {/** CATEGPRIES SECTION */}
         <div>
        <h1 className='uppercase text-black font-black '>categories</h1>

       </div>
    </div>
  )
}

export default Footer
