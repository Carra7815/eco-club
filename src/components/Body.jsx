import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Support from "./Support";

function Body() {
  return (
    <div className="grow overflow-y-auto border-4 border-red-950">
      <div className="container mx-auto my-8 border-4 border-blue-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
}

export default Body;
