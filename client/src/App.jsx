import { useEffect, useState } from "react";
// import Header from './component/Header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./cpmponenets/Header/Header";
import Lenis from "@studio-freight/lenis";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [count, setCount] = useState(0);

  // this is for smooth scrolling by lenis

  return (
    <>
      <div className="w-screen h-auto flex flex-col  bg-shades-1">
        <Router>
          {/* <Cursor scaling={scaling}/> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Analytics />
        </Router>
      </div>
    </>
  );
}

export default App;
