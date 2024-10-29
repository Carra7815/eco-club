import React from "react";
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import ThemeToggle from "./ThemeToggle";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center text-lg font-bold">
          <CubeTransparentIcon className="mr-1 inline-block h-5 w-5" />
          eco club
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-item">
              Projects
            </Link>
          </li>
          <li className="flex">
            <Navmenu />
          </li>
          <li className="flex">
            <ThemeToggle className="nav-item" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
