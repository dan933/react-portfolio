import React from 'react';
import './App.css';
import AboutMe from './Components/about-me/about-me';
import Experience from './Components/projects/projects';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <AboutMe />
      <Experience/>
    </ParallaxProvider>
  );
}

export default App;
