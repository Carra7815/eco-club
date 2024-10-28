import React from "react";
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-light text-xl font-bold">
          eco club
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/about" className="nav-text-color">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-text-color">
              Projects
            </Link>
          </li>
          <li className="flex">
            <Navmenu />
          </li>
          <li className="flex">
            <ThemeToggle className="nav-text-color" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
