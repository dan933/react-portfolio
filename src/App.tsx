import React from 'react';
import './App.css';
import AboutMe from './Components/about-me/about-me';
import Projects from './Components/projects/projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import Experience from './Components/experience/experience';

function App() {
  return (
    <ParallaxProvider>
      <AboutMe />
      <Projects />
      <Experience/>
    </ParallaxProvider>
  );
}

export default App;
