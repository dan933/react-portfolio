import React from 'react';
import './App.css';
import AboutMe from './Components/about-me/about-me';
import Projects from './Components/projects/projects';
import Education from './Components/education/education';
import { Box, List, SwipeableDrawer } from '@mui/material';
import Contact from './Components/contact/contact';
import NavBar from './Components/nav-bar/nav-bar';
import {   Element } from 'react-scroll'
import Drawer from './Components/nav-bar/drawer/drawer';

function App() {

  const [drawer, setDrawer] = React.useState(false)

  return (
    <Box
    sx={{
      overflowX: 'hidden',
    }}
    >
      <NavBar
        openDrawer = {() => setDrawer(prev => !prev)}
      />
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


      <Drawer
        drawer={drawer}
        setDrawer={setDrawer}
      />
    </Box>

  );
}

export default App;
