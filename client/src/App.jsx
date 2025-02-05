import React from 'react'
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhereToBuy from "./components/WhereToBuy ";

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Services />
      <WhereToBuy />
    </div>
  );
}

export default App