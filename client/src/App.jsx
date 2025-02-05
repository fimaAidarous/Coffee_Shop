import React from 'react'
import Hero from "./components/Hero";
import Services from "./components/Services";
function App() {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Services />
    </div>
  );
}

export default App