import { useEffect, useState } from "react";
// import Header from './component/Header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { usePageTraffic, useUrlTraffic,TrackUrls } from "page-traffic-tracker";

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
  const id = '06638467372171c8ba60fca523c5ec71f45d9da6d179b341d21485c299f7fd5f8527fb4f98d07f918f7bbf13591be88f'
  // const { totalViews, todayViews, averageView,allUrls } = usePageTraffic(id);
  // const url ='/'
  // const {
  //   totalUrlViews,todayUrlViews,averageUrlView
  // } = useUrlTraffic(id, url);

  // console.log(totalUrlViews)
  // console.log(todayUrlViews)
  // console.log(averageUrlView)
  // console.log(allUrls)

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
          <TrackUrls id={id}/>;
        </Router>
      </div>
    </>
  );
}

export default App;
