import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Agence" element={<Agence />} />
        </Routes>
    </div>
  );
};

export default App;
