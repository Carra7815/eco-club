import React from "react";

import { useHref, useNavigate } from "react-router-dom";

import { RouterProvider } from "react-aria-components";

import Navbar from "@components/Navbar";
import Body from "@components/Body";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <div className="flex h-screen flex-col">
        <Navbar />
        <Body />
      </div>
    </RouterProvider>
  );
}

export default App;
