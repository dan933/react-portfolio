import './projects.css'
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { CardData } from '../../data/project-data';
import ProjectCard from './project-card';
import { Slide, Tab, Tabs } from '@mui/material';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { IProjectCard } from '../../Models/project-card-model';
import ProjectDialog from './project-dialog/project-dialog';
import TabsSection from './tabs-section/tabs-section';


function Projects() {
  
  const [slideChecked, setSlideChecked] = React.useState(false);

  const handleSlideChange = () => {

    if (!slideChecked) {
      setSlideChecked(true);      
    }    
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400 && !slideChecked) {
        handleSlideChange()
      }
    };

    window.addEventListener('scroll', handleScroll);  

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (   
        <div
          className='container'
    >
          <div className='spacer'>
          </div>
          <Slide direction="right" in={slideChecked} mountOnEnter unmountOnExit>
            <div
              className='projects-container'
            >
              <TabsSection />
            </div>
          </Slide>
        </div>

  )
}

export default Projects