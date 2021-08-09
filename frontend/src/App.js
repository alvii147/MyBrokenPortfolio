import React, { useRef } from 'react';
import './App.css';

import Ubuntu from './components/Ubuntu/Ubuntu';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Endorsements from './components/Endorsements/Endorsements';
import Contact from './components/Contact/Contact';

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const endorsementsRef = useRef();
  const contactRef = useRef();

  const scroller = (ref) => ref.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});

  return (
    <div id="main-container">
      <Ubuntu
        scrollToAbout={() => scroller(aboutRef)}
        scrollToProjects={() => scroller(projectsRef)}
        scrollToSkills={() => scroller(skillsRef)}
        scrollToExperience={() => scroller(experienceRef)}
        scrollToEndorsements={() => scroller(endorsementsRef)}
        scrollToContact={() => scroller(contactRef)}>
      </Ubuntu>
      <About
        ref={aboutRef}
        scrollToProjects={() => scroller(projectsRef)}
        scrollToContact={() => scroller(contactRef)}>
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
        ref={experienceRef}
        scrollToEndorsements={() => scroller(endorsementsRef)}>
      </Experience>
      <Endorsements
        ref={endorsementsRef}
        scrollToContact={() => scroller(contactRef)}>
      </Endorsements>
      <Contact
        ref={contactRef}>
      </Contact>
    </div>
  );
}

export default App;