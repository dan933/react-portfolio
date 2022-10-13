import './projects.css'
import React from 'react';
import TabsSection from './tabs-section/tabs-section';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Projects() {  
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div
        className='container'
      >
        <div className='spacer'>
        </div>
          <div
            className='projects-container'
          >
            <TabsSection />
          </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Projects