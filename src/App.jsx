import React, { useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga4";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-ZXKGVMW4P3');
    ReactGA.send("pageview");
  }, []);

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
