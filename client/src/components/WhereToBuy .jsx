import React from "react";
import worldmap from "../assets/map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div
        className="grid grid-cols-1
          sm:grid-cols-3 gap-8
           place-items-center"
      >
        {/* form section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-4xl font-bold text-black
           font-serif"
          >
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[#5C3317] via-[#8B5A2B] to-[#CD853F]  
           hover:from-[#CD853F] hover:to-[#5C3317] 
           text-white font-bold py-3 px-6 
           rounded-2xl shadow-lg transform 
           transition-all duration-300 ease-in-out 
           hover:scale-105 hover:shadow-2xl"
          >
            Order Now 🚀
          </motion.button>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={worldmap}
            alt="world map"
            className="w-full sm:w-[500] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
