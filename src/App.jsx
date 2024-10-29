import React from "react";

import { useHref, useNavigate } from "react-router-dom";

import { RouterProvider } from "react-aria-components";

import Navbar from "@components/Navbar";
import Main from "@components/Main";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <div className="flex h-screen flex-col">
        <Navbar />
        <Main />
      </div>
    </RouterProvider>
  );
}

export default App;
