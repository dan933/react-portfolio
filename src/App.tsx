import React from 'react';
import './App.css';
import AboutMe from './Components/about-me/about-me';
import Projects from './Components/projects/projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import Education from './Components/education/education';
import { Box } from '@mui/material';
import Contact from './Components/contact/contact';
import NavBar from './Components/nav-bar/nav-bar';

function App() {
  return (
      <Box
      sx={{
          overflowX: 'hidden',
      }}
    >
        <NavBar/>
        <AboutMe/>
        <Projects />
        <Education />
        <Contact/>
      </Box>
  );
}

export default App;
