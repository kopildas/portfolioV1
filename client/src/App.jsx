import { useState } from 'react'
// import Header from './component/Header/Header'
import { BrowserRouter as Router,
  Routes,
  Route,
  useLocation, } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './cpmponenets/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="w-screen h-auto flex flex-col  bg-white">
      <Router>
        {/* <Cursor scaling={scaling}/> */}
        <Header />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
