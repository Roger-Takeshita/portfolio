import React from 'react';
import './css/App.css';
import Intro from './sections/Intro';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Skills from './sections/Skills';
import SideProjects from './sections/SideProjects';
import ContactMe from './sections/ContactMe';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import Cookies from 'js-cookie';
import Scrollspy from 'react-scrollspy'
import "core-js/stable";
import "regenerator-runtime/runtime";

function App() {
  return (
    <div className="App container">
      <header className="my-header">
        <NavBar2 />
      </header>
      <main className="my-main">
        <Intro />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <SideProjects />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
