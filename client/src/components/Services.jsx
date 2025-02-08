import React from "react";
import { motion } from "framer-motion";
import coff1 from "../assets/drink.png";
import coff2 from "../assets/frozen-coffee-recipe-10.png";
import coff3 from "../assets/frozen.png";

const servicesData = [
  {
    id: 1,
    image: coff1,
    title: "frozen coffee",
    subtitle: "a frozen coffee drink perfect for summer",
  },
  {
    id: 1,
    image: coff2,
    title: "Blended Coffee Drinks",
    subtitle: "Chilled, Creamy, and Irresistibly Smooth",
  },
  {
    id: 1,
    image: coff3,
    title: "Coconut Caramel Frappe",
    subtitle: " Recipe with Cold Brew Concentrate",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};
const Services = () => {
  return (
    <div
      className="container my-16
     space-y-4"
    >
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold
         text-lightGray"
        >
          Fresh and
          <span className="text-lightBrown"> Tasty Coffe</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Freshly roasted, irresistibly tasty, and crafted for every coffee
          lover, No artificial flavors, just pure, rich coffee ☕.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1
         sm:grid-cols-2 md:grid-cols-3
          gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            className="text-center p-2 space-x-6"
          >
            <img
              src={service.image}
              alt=""
              className="img-shadow2
                 max-w-[200px] mx-auto
                  hover:scale-110 duration-300
                   cursor-pointer"
            />
            <div className="space-y-1">
              <h1
                className="text-2xl
                 font-bold text-lightBrown"
              >
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
