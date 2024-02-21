import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import React from 'react';
import Skills from './components/Skills';
import Stats from './components/Stats';
import About from './components/About';
import Contact from './components/Contact';
// importing react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import $ from 'jquery';
import { SpeedInsights } from "@vercel/speed-insights/react"
// import { useLocation } from 'react-router-dom';

function App() {
  const text = 'Welcome to My Portfolio'
  const [index, setIndex] = React.useState(0)
  const location = window.location;
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => {
        if (index === text.length - 1) {
          clearInterval(intervalId);
          return index;
        }
        return index + 1;
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, []);


  React.useEffect(() => {
    if (location.pathname === '/') {
      setTimeout(() => {
        $('.intro').addClass("fadeOut");
      }, 5000);
    }else{
      $('.intro').addClass("remove");
    }
  }, [location]);
  


  return (
    <div>
      <Router>
      <div className='intro text-center' style={{height:'100vh',width:'100vw',fontSize:'40px',color:'var(--color-6)',position:'fixed',backgroundColor:'var(--color-1)',zIndex:'300'}}>
            <div style={{marginTop:'30vh'}}>{text.slice(0, index+1)} <span className='writer' style={{color:'var(--color-4)'}}>|</span></div>
      </div>
      <NavBar/>

        <Banner />

        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path="/admin/speed" element={<SpeedInsights/>} />
          <Route path="/stats" element={<Stats/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
