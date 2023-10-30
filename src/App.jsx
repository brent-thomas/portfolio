import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'
import Nav from './components/nav/Nav';
import Connect from './pages/connect/Connect';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
    <Nav/>
      <div className='pd-hz pd-vt'>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/connect" element={<Connect/>}/>
        </Routes>
        </div>
    </Router>
  )
}

export default App
