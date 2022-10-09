import './projects.css'
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { CardData } from '../../data/project-data';
import ProjectCard from './project-card';
import { Slide, Tab, Tabs } from '@mui/material';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Projects() {

  const [tabValue, setTabValue] = React.useState(0);

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    tabValue: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, tabValue, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={tabValue !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {tabValue === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const tabs = CardData.map((card,index) => (
    <Tab label={card.title} key={index} {...a11yProps(index)}></Tab>
  ))

  const tabPanel = CardData.map((card, index) => (
    <TabPanel tabValue={tabValue} key={index} index={index}>
      <ProjectCard
        key={index}
        card={card}
      />
   </TabPanel> 
  ))

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

  const projectTabsElement = (
    <Box
          className='projects-container'
    >
            <h1>Projects</h1>
      <Tabs
        allowScrollButtonsMobile={true}
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="inherit"
        aria-label="full width tabs example"
        scrollButtons="auto"
        variant="scrollable"
      >
        {tabs}
      </Tabs>
      {tabPanel}
      <Box
        display={'flex'}
        justifyContent={'center'}
      >
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
      </Box>
      </Box>
  )

  
  return (
    <Element
    name="projects"
    >
      <Box
        className='container'
      >
          
          {/* <FormControlLabel
            control={<Switch checked={slideChecked} onChange={handleSlideChange} />}
            label="Show"
          /> */}
        <Slide direction="right" in={slideChecked} mountOnEnter unmountOnExit>
            {projectTabsElement}
        </Slide>


      </Box>

    </Element>
  )
}

export default Projects