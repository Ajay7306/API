import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Select from './components/Select';

function App() {
  return (
    <div className='bg-[#121317] p-4 flex justify-center flex-col w-full gap-5 overflow-hidden'>
      <Navbar />
      <Hero />
      <Select />
    </div>
  );
}

export default App;
