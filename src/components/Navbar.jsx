import React,{useState}from 'react'
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
 

const Navbar = () => {

    const[activeLink, setActiveLink]= useState('#New Arrivals');

    const navLinks = [

        {href:"/", label: "New Arrivals"},
        {href:"/Men", label: "Men"},
        {href:"/Women", label:"Women"},
        {href:"/Kids", label: "Kids"},

    ];

  return (
    <nav className=' flex top-0 left-0 right-0  backdrop-blur-xm z-50  bg-transparent  '>

     <div className='  w-full  container text-[#325320] h-16 mx-auto flex   items-center  justify-between mt-4 px-4 sm:px-8 lg:px-8 md:h-20 '> 
           
            {/**  LOGO */}
        
        <div className='flex gap-1 items-center cursor-pointer  '>
             <h1 className='text-xl font-bold'>Kleiderkunst</h1>
        </div>    

            {/**  Desktop NAVBAR ITEMS */}
        
        <div className=' hidden md:flex items-center  gap-4 right-10' >
             {

             navLinks.map((link, index) => {
               return <a key={index}
               onClick={() => setActiveLink(link.href)}
               href={link.href} 
               className= {` relative ml-4 left-0
               font-medium hover:border-b  hover:text-orange-600
               ${activeLink === link.href ? "text-[#325320]" : 'text-[#325320]'}`}>
                {link.label}
                </a>
            }) 
             
             }
        </div>

            {/**  LOGIN*/}
            
            <div>
          <Link to='/login'>
            <IoPerson className="text-2xl cursor-pointer hover:text-orange-500" />
          </Link>
        </div>


    </div>      
    </nav>
  )
}

export default Navbar
