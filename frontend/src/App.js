import React, { useRef } from 'react';
import './App.css';
import Ubuntu from './components/Ubuntu/Ubuntu';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const scroller = (ref) => ref.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
  return (
    <div id="main-container">
      <Ubuntu
        scrollToAbout={() => scroller(aboutRef)}
        scrollToProjects={() => scroller(projectsRef)}>
      </Ubuntu>
      <About
        ref={aboutRef}
        scrollToProjects={() => scroller(projectsRef)}>
      </About>
      <Projects ref={projectsRef}></Projects>
    </div>
  );
}

export default App;