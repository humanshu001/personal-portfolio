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

function App() {
  return (
    <div>
      <Router>
      <NavBar/>

        <Banner />

        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path="/stats" element={<Stats/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
