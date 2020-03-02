import React from 'react';
import './css/App.css';
import Intro from './sections/Intro';
import AboutMe from './sections/AboutMe';
// import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import ContactMe from './sections/ContactMe';
import NavBar from './components/NavBar2';

function App() {
  return (
    <div className="App">
      <header className="my-header">
        <NavBar />
      </header>
      <main className="my-main">
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
