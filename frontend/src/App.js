import React, { useRef } from 'react';
import './App.css';
import Ubuntu from './components/Ubuntu/Ubuntu';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills'

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const scroller = (ref) => ref.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
  return (
    <div id="main-container">
      <Ubuntu
        scrollToAbout={() => scroller(aboutRef)}
        scrollToProjects={() => scroller(projectsRef)}
        scrollToSkills={() => scroller(skillsRef)}>
      </Ubuntu>
      <About
        ref={aboutRef}
        scrollToProjects={() => scroller(projectsRef)}>
      </About>
      <Projects
        ref={projectsRef}
        scrollToSkills={() => scroller(skillsRef)}>
      </Projects>
      <Skills
        ref={skillsRef}>
      </Skills>
    </div>
  );
}

export default App;