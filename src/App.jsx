import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const location = useLocation();

  return (
    <div className="relative">
      <Header />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname}/>
      </AnimatePresence>

    </div>
  )
}

export default App
