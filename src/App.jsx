import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'
import Nav from './components/nav/Nav';
import Connect from './pages/connect/Connect';
import Education from './pages/education/Education';
import Python from './pages/python/Python';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
    <Nav/>
      <div className='pd-hz pd-vt bg-light-gray ht-100vh'>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/connect" element={<Connect/>}/>
              <Route path="/education" element={<Education/>}/>
              <Route path="/python*" element={<PythonRoutes/>} />
        </Routes>
        </div>
    </Router>
  )
}


function PythonRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Python/>} />
        <Route path="projects/masterticket" element={<h1>masterticket</h1>} />
      </Routes>
    </div>
  );
}

export default App
