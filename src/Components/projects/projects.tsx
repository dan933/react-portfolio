import './projects.css'
import React, { useEffect } from 'react';
import { Slide } from '@mui/material';
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