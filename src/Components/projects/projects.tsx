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

  const [openDialog, setOpenDialog] = React.useState(false);
  
  const [selectedCard, setSelectedCard] = React.useState<IProjectCard>({
    title: "",
    subtitle: "",
    img: "",
    caption: "",
    gitHubLink: "",
    youtubeLink: "",
    sourceCode: "",
    description: "",
    demoURL: "",
    IsGitHubButton: false,
    IsDemoButton: false
  });

  const handleDialog = () => {
    setOpenDialog(prev => !prev);
  };

  const [slideChecked, setSlideChecked] = React.useState(false);

  const handleSlideChange = () => {

    if (!slideChecked) {
      setSlideChecked(true);      
    }    
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !slideChecked) {
        handleSlideChange()
      }
    };

    window.addEventListener('scroll', handleScroll);  

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const projectTabsElement = (
  //   <Box
  //         className='projects-container'
  //   >
  //           <h1>Projects</h1>
  //     <Box
  //       display={'flex'}
  //       justifyContent={'center'}
  //     >
  //      <Link
  //         activeClass="active"
  //         to="education"
  //         spy={true} 
  //         smooth={true}
  //         offset={20}
  //         duration={500}
  //       >
  //         <Box className="arrow"></Box>
  //       </Link>
  //     </Box>
  //   </Box>
  // )

  
  return (

    <>
      <Element
        name="projects"
      >
        <Box
          className='container'
        >
          <Slide direction="right" in={slideChecked} mountOnEnter unmountOnExit>
            <div
              className='projects-container'
            >
              <TabsSection />
            <Link
              activeClass="active"
              to="education"
              spy={true} 
              smooth={true}
              offset={20}
              duration={500}
            >
              <Box className="arrow"></Box>
            </Link>
            </div>
          </Slide>
        </Box>
      </Element>
    
    </>
  )
}

export default Projects