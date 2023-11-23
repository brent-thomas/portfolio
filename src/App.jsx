import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'
import Nav from './components/nav/Nav';
import Connect from './pages/connect/Connect';
import Education from './pages/education/Education';
import Python from './pages/python/Python';
import Javascript from './pages/javascript/Javascript';
import { useEffect } from 'react';
import AntiTherapy from './pages/javascript/projects/antitherapy/AntiTherapy';

function ConditionalNav() {
  const location = useLocation();

  if (location.pathname.includes('/projects')) {
      return null; // Don't render Nav if the URL includes '/projects'
  }

  return <Nav />; // Render Nav otherwise
}

function App() {
  const [count, setCount] = useState(0)
  


  return (
    <Router>
    
    <ConditionalNav /> {/* Use ConditionalNav here */}
      <div className='pd-hz pd-vt ht-100vh'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/connect" element={<Connect/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/javascript/*" element={<JavascriptRoutes/>} />
            <Route path="/python/*" element={<PythonRoutes/>} />
        </Routes>
        </div>
    </Router>
  )
}


function PythonRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Python/>} />
        <Route path="projects/masterticket" element={<h1>masterticket</h1>} />
      </Routes>
  );
}

function JavascriptRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Javascript/>} />
        <Route path="projects/antitherapy" element={<AntiTherapy/>} />
      </Routes>
  );
}

export default App
