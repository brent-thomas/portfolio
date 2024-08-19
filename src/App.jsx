import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'
import Nav from './components/nav/Nav';
import Connect from './pages/connect/Connect';
import Education from './pages/education/Education';
import Python from './pages/python/Python';
import Javascript from './pages/javascript/Javascript';
import AntiTherapy from './pages/javascript/projects/antitherapy/AntiTherapy';
import Typewriter from 'typewriter-effect';
import doorKnock from './assets/door_bang.mp3'


function ConditionalNav() {
  const location = useLocation();
  if (location.pathname.includes('/projects')) {
      return null;
  }

  return <Nav />;
}

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <Router>
      {showOverlay ?
    <div className='matrix_overlay' id="matrix">
      <div className='matrix_container'>
        {!showButton && showOverlay ?
        <div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Wake up, Neo...')
              .pauseFor(2500)
              .deleteAll()
              .typeString('The Matrix has you...')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Follow the white rabbit.')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Knock, knock, Neo.')
              .pauseFor(1500)
              .deleteAll()
              .callFunction(() => {
                const audio = new Audio(doorKnock)
                audio.play();
                setShowButton(true)
              })
              .start();
          }}
          
      />
      </div>
      : (

        <button 
        onClick={()=>{
          setShowOverlay(false)
        }}>
          🐇<br></br>
        </button>
 
      )}
      </div>
    </div>
    :
    null}
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
