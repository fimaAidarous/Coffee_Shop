import React from 'react'
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhereToBuy from "./components/WhereToBuy ";
import AppBanner from "./components/AppBanner";

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Services />
      <WhereToBuy />
      <AppBanner/>
    </div>
  );
}

export default App