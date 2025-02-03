import React from "react";
import Bgimage from "../assets/black-gradient.png";
import CoffeMine from "../assets/coffe c.png";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${Bgimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
    const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section
        className="relative min-h-[700px]
       w-full"
      >
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} 
           setSidebar={setSidebar} />
          {/* Hero section */}
          <div
            className="grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 place-items-center min-h-[850px]"
          >
            {/* text content section */}
            <div
              className="text-white mt-[100px]
                md:mt-0 p-4 space-y-28"
            >
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-7xl font-bold 
                    leading-tight ml-14 absolute top-20 left-10
                     text-lightOrange max-w-md"
              >
                Spectacular Coffee
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="absolute bottom-30 left-10 text-white max-w-md"
            >
              <div className="relative z-10 space-x-4">
                <h1 className="text-4xl">Rich & Aromatic, </h1>
                <h1 className="text-sm opacity-56 leading-loose">
                  At Sip & Savor, coffee isn’t just a drink—it’s a ritual, a
                  moment of peace, and a source of inspiration. We bring you the
                  finest, freshly roasted beans, carefully sourced from the best
                  coffee-growing regions around the world. Whether you crave the
                  bold intensity of espresso, we have the perfect blend for you.
                </h1>
              </div>
              <div
                className="absolute -top-6 -left-10
                 w-[250] h-[180px] bg-gray-700/25"
              ></div>
            </motion.div>
            {/* Hero image section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="relative"
            >
              <img
                src={CoffeMine}
                alt=""
                className="relative z-40 h-[400px] 
                   md:h-[700px] img-shadow"
              />
              {/* big text section */}
              <div
                className="absolute left-80 top-20 text-9xl 
               text-gray-900 opacity-10
               font-bold"
              >
                Coffee Moments ☕
              </div>
            </motion.div>
          </div>
        </div>
        {/* sidebar menu section */}
        {
          sidebar && (
            <div
            className="absolute top-0 right-0 w-[140px]
              h-full bg-gradient-to-b from-primary/80
               to-primaryDark/80 backdrop-sm z-3">
                <div className="w-full h-full flex justify-center
               items-center ">
            <div className="flex flex-col justify-center
             items-center gap-6">
              {/* line */}
              <div className="w-[1px] h -[70px] bg-white"></div>
              {/* social icons */}
              <div className="inline-block p-2 rounded-full
                cursor-pointer border border-black">
                <FaFacebookF className="text-1xl"/>
              </div>
              <div className="inline-block p-2 rounded-full
                cursor-pointer border border-black">
                <FaTwitter className="text-1xl"/>
              </div>
              <div className="inline-block p-2 rounded-full
                cursor-pointer border border-black">
                <FaInstagram className="text-1xl" />
              </div>
              <div className="w-[1px] h -[50px] bg-white"></div>
            </div>
            </div>
          </div>
          )
        }
      </section>
    </main>
  );
};

export default Hero;
