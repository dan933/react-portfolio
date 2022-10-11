import React from 'react';
import './App.css';
import AboutMe from './Components/about-me/about-me';
import Projects from './Components/projects/projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import Education from './Components/education/education';
import { Box, List, SwipeableDrawer } from '@mui/material';
import Contact from './Components/contact/contact';
import NavBar from './Components/nav-bar/nav-bar';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
            <AboutMe/>
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
            <Contact/>
          </Element>

       
          <SwipeableDrawer
          anchor={'left'}
          disableScrollLock={true}
          open={drawer}
          onClose={() => setDrawer(prev => !prev)}
          onOpen={() => setDrawer(prev => !prev)}
          >
             <Box
          sx={{width:'200px'}}
        >
         <List>
          
         </List>

        </Box>

          </SwipeableDrawer>
        </Box>

  );
}

export default App;
