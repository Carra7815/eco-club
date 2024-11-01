import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Support from "./Support";
import Beliefs from "./Beliefs";
import Vision from "./Vision";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </main>
  );
}

export default Main;
