import './App.css';

import React from 'react';
import Skills from './components/Skills';
import Stats from './components/Stats';
import About from './components/About';
import Contact from './components/Contact';
// importing react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { SpeedInsights } from "@vercel/speed-insights/react"
import NotFound from './components/NotFound';
import View from './components/View';

import { Analytics } from "@vercel/analytics/react"
// import { useLocation } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Analytics/>
      


        <Routes>
          <Route path="/" element={<View/>}>
            <Route path="/" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path="/stats" element={<Stats/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
        <SpeedInsights/>
      </Router>
    </div>
  );
}

export default App;
