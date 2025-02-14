import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import Services from './pages/Services'
import SmartContract from './pages/SmartContract'
import Solution from './pages/Solution'
import GetStarted from './pages/GetStarted';
import Ecosystems from './pages/Ecosystems';


function App() {
 

  return (
    <>
     <HashRouter>
      <div>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* This shows your main content */}
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/services" element={<Services />} />
          <Route path="/smart" element={<SmartContract />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/started" element={<GetStarted/>}/>
          <Route path='/ecosystem' element={<Ecosystems/>}/>
        </Routes>
      </div>
    </HashRouter>
  
    </>
  )
}

export default App
