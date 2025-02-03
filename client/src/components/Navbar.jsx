import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

function Navbar({sidebar, setSidebar}) {
  return (
    <nav className='absolute top-0 left-0 w-full
      pt-19 text-white z-10'>
      <div className='container'>
       <div className='flex justify-between items-center text-black'>
        {/* logo section */}
        <motion.h1 
         initial={{ opacity: 0, y: -100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           type: "spring",
           stiffness:100,
           damping: 10,
           delay:1.2,
         }}
        className='text-1xl font-bold'>
          <span className='text-primary'> Health Workers </span> 
          <span className='text-white font-bold'> Coffee. </span>
        </motion.h1>
        {/* Hamburger Menu section */}
        <motion.div
         initial={{ opacity: 0, y: -100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           type: "spring",
           stiffness:100,
           damping: 10,
           delay:1.2,
         }}
         onClick={() => setSidebar(!sidebar)}>
          <GiHamburgerMenu className= 
          "text-3xl cursor-pointer"/>
        </motion.div>
       </div>
      </div>
    </nav>
  );
}

export default Navbar