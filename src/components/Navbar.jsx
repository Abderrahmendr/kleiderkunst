import React,{useState}from 'react'
import Link from 'react'
import Login from '../pages/Login'

const Navbar = () => {

    const[activeLink, setActiveLink]= useState('#New Arrivals');

    const navLinks = [

        {href:"#New Arrivals", label: "New Arrivals"},
        {href:"#Men", label: "Men"},
        {href:"#Women", label:"Women"},
        {href:"#Kids", label: "Kids"},

    ];

  return (
    <nav className='fixed top-0 left-0 right-0  backdrop-blur-xm z-50 bg-teal-500 shadow-sm border-b border-white'>

     <div className=' w-full container h-16 mx-auto flex  items-center  justify-between px-4 sm:px-8 lg:px-8 md:h-20 '> 
           
            {/**  LOGO */}
        
        <div className='flex gap-1 items-center cursor-pointer  '>
             <h1 className='text-white font-bold'>Kleiderkunst</h1>
        </div>    

            {/**  Desktop NAVBAR ITEMS */}
        
        <div className=' hidden md:flex items-center  gap-4 right-10' >
             {

             navLinks.map((link, index) => {
               return <a key={index}
               onClick={() => setActiveLink(link.href)}
               href={link.href} 
               className= {` relative ml-4 left-0
               font-medium hover:border-b  
               ${activeLink === link.href ? "text-blue-500 " : "text-white"}`}>
                {link.label}
                </a>
            }) 
             
             }
        </div>

            {/**  LOGIN*/}

            <div>
               < Login />
            </div>


            {/**  */}


    </div>      
    </nav>
  )
}

export default Navbar
