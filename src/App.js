import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import video from '../src/assets/videos/video.mp4'

import Experiencia from "./components/Experiencia/Experiencia";
function App() {
  return (
    <>
     <video src={video} className="videoHome blur" loop autoPlay muted/>
    <div className="App">
      
      <header className="App-header">
     
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<Experiencia />} />
      </Routes>
       
      </header>

    </div>
    </>
  );
}

export default App;
