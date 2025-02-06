import React from 'react'
import backImage from "../assets/com.png"
import appStore from "../assets/app_store.png";
import google from "../assets/google.png"
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${backImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className='container my-14'>
       <div
        style={BannerStyle}
        className='sm:min-h-[400px]
         sm:items-center rounded-xl'>
         <div>
          <div className='space-y-6 max-w-xl mx-auto'>
          <motion.h1 
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.2,
           }}
          className='text-2xl text-center sm:text-4xl
            font-semibold text-white'>
            Download the Sip & Savor App now</motion.h1>
          <motion.p 
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.3,
           }}
          className='text-center sm:px-20 text-white'>
          Enjoy Your Perfect Cup Anytime! ☕📲
           and experience the finest coffee at 
          your fingertips! {" "}🚀🔥
          </motion.p>
          {/* images link */}
          <div className='flex justify-center
           items-center gap-4'>
            <a href="#"
             className='max-w-[150] sm:max-w-[120]
              md:max-w-[200px]'>
              <motion.img 
               initial={{ opacity: 0, y: -100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                 type: "spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 0.4,
               }}
              src={appStore}
              alt="app Store" />
            </a>
            <a href="#"
            className='max-w-[150] sm:max-w-[120]
            md:max-w-[200px]'>
              <motion.img 
               initial={{ opacity: 0, y: -100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                 type: "spring",
                 stiffness: 100,
                 damping: 10,
                 delay: 0.5,
               }}
              src={google}
              alt="app Store" />
            </a>
          </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default AppBanner