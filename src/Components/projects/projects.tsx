import React from 'react'
import './projects.css'
import { Parallax  } from 'react-scroll-parallax';

function Projects() {
  return (
    <div style={{height:'1000px'}}>
      <Parallax translateX={[0, 60]}>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </Parallax>
      <Parallax translateX={[0, 95]}>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </Parallax>
      
    </div>
  )
}

export default Projects