import React from 'react';
import './App.css';
import AboutMe from './Components/about-me/about-me';
import Projects from './Components/projects/projects';
import Education from './Components/education/education';
import { Box } from '@mui/material';
import Contact from './Components/contact/contact';
import NavBar from './Components/nav-bar/nav-bar';
import { Element } from 'react-scroll'

function App() {

  return (
    <Box
    sx={{
      overflowX: 'hidden',
    }}
    >
      <NavBar/>
      
      <Element
        name="about"
      >
        <AboutMe />
        
      </Element>

      <Element
        name="projects"
      >
        <Projects />

      </Element>

      <Element
        name="education"
      >
        <Education />
        
      </Element>

      <Element
        name="contact"
      >        
        <Contact />
      </Element>
    </Box>

  );
}

export default App;
