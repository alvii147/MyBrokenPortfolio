import React, { useRef } from 'react';
import './App.css';
import Ubuntu from './components/Ubuntu/Ubuntu';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();

  const scroller = (ref) => ref.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});

  return (
    <div id="main-container">
      <Ubuntu
        scrollToAbout={() => scroller(aboutRef)}
        scrollToProjects={() => scroller(projectsRef)}
        scrollToSkills={() => scroller(skillsRef)}
        scrollToExperience={() => scroller(experienceRef)}>
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
        ref={skillsRef}
        scrollToExperience={() => scroller(experienceRef)}>
      </Skills>
      <Experience
        ref={experienceRef}>
      </Experience>
    </div>
  );
}

export default App;