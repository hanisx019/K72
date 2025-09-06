import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Navbar from "./components/navigation/Navbar";
import MenuBar from "./components/navigation/MenuBar";
import { useContext, useState, useEffect, useCallback } from "react";
import { NavBarContext } from "./context/NavContext";
import { useLocation } from "react-router-dom";

const App = () => {
  // Robust: Reload only on first direct visit (not after reload or navigation)
  useEffect(() => {
    const isFirstLoad = !window.sessionStorage.getItem('firstLoadDone');
    const isDirectVisit = window.location.pathname === '/' && window.location.search === '' && window.location.hash === '' && document.referrer === '';
    if (isFirstLoad && isDirectVisit) {
      window.sessionStorage.setItem('firstLoadDone', 'true');
      window.location.reload();
      console.log('Page reloaded on first direct visit');
    }
  }, []);
  const location = useLocation();
  useEffect(() => {
    switch(location.pathname) {
      case '/':
        document.title = 'Home — K72';
        break;
      case '/Projects':
        document.title = 'Projects — K72';
        break;
      case '/Agence':
        document.title = 'Agence — K72';
        break;
      default:
        document.title = 'K72';
    }
  }, [location.pathname]);
  const [navOpen, setNavOpen] = useContext(NavBarContext);
  const [agenceKey, setAgenceKey] = useState(0);

  // Reload Agence page on navigation
  useEffect(() => {
    if (location.pathname === '/Agence') {
      setAgenceKey(prev => prev + 1);
    }
  }, [location.pathname]);

  // Callback to reload Agence when MenuBar closes on Agence page
  const handleMenuBarClose = useCallback(() => {
    if (location.pathname === '/Agence') {
      setAgenceKey(prev => prev + 1);
    }
  }, [location.pathname]);

  return (
    <div className="text-white">
      <Navbar />
      {navOpen && <MenuBar onClose={handleMenuBarClose} setNavOpen={setNavOpen} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Agence" element={<Agence key={agenceKey} />} />
      </Routes>
    </div>
  );
};

export default App;
