import React from 'react'
import Bgimage from "../assets/black-gradient.png";
import CoffeMine from "../assets/coffe c.png";


const bgImage = {
    backgroundImage: `url(${Bgimage})`,
    backgroundSize: "cover",
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
   <main style={bgImage}>
     <section className='min-h-[750px]
       w-full'>
        <div className='container'>
            {/* Navbar section */}
            {/* Hero section */}
            <div className='grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 place-items-center min-h-[850px]'>
             {/* text content section */}
               <div className='text-white mt-[100px]
                md:mt-0 p-4 space-y-28'>
                  <h1 className='text-7xl font-bold 
                    leading-tight ml-14 absolute top-10 left-10 text-lightOrange max-w-md'>
                    Spectacular Coffee</h1>
               </div>
               <div className='absolute top-28 left-10 text-white max-w-md mt-28'>
                <div className='relative z-10 space-x-4'>
                <h1 className='text-4xl'>Rich & Aromatic, </h1>
                 <h1 className='text-sm opacity-56 leading-loose'>
                  At Sip & Savor, coffee isn’t just a drink—it’s a ritual, 
                  a moment of peace, and a source of inspiration. We bring you the finest, 
                  freshly roasted beans, carefully sourced from the best coffee-growing regions 
                  around the world. Whether you crave the bold intensity 
                  of espresso, we have the perfect blend for you.</h1>
                </div>
                <div className='absolute -top-6 -left-10
                 w-[250] h-[180px] bg-gray-700/25'>
               </div>
               </div>
                 {/* Hero image section */}
                 <div className='relative'>
                  <img src={CoffeMine} 
                  alt="" 
                  className='relative z-40 h-[400px] 
                   md:h-[700px] img-shadow'
                  />
                    {/* big text section */}
                 <div>
                 <h1 className='text-[140px] scale-150
                   font-bold text-lightOrange/40 leading-none'>
                    Sip & Savor</h1>
                 </div>
                 </div>
            </div>
        </div>
     </section>
   </main>
  );
}

export default Hero;