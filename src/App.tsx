import React from 'react';
import './App.css';
import AboutMe from './Components/about-me/about-me';
import Projects from './Components/projects/projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import Education from './Components/education/education';
import { Box } from '@mui/material';

function App() {
  return (
    <ParallaxProvider>
      <Box
      sx={{
        overflowX:'hidden'
      }}
      >
        <AboutMe />
        <Projects />
        <Education/>
      </Box>
    </ParallaxProvider>
  );
}

export default App;
