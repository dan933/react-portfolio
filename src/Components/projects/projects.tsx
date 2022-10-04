import './projects.css'
import { Parallax } from 'react-scroll-parallax';
import { Box } from '@mui/system';
import React from 'react';
import { CardData } from '../../data/project-data';
import ProjectCard from './project-card';
import { IProjectCard } from '../../Models/project-card-model';
import { Tab, Tabs, Typography } from '@mui/material';


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
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setTabValue(index);
  };

  const cardProjects = CardData.map((card: IProjectCard, index) => (
      <ProjectCard
        key={index}
        card={card}
      />
  ))

  const tabs = CardData.map((card,index) => (
    <Tab label={card.title} {...a11yProps(index)}></Tab>
  ))

  const tabPanel = CardData.map((card, index) => (
    <TabPanel tabValue={tabValue} index={index}>
      <ProjectCard
        key={index}
        card={card}
      />
   </TabPanel> 
  ))

  
  return (
    <Box
      className='container'
    >
      <Parallax
        translateX={['-100%', '0%']}
        startScroll={100}
        endScroll={500}
      >
        <h1>Projects</h1>
        <Box
          className='projects-container'
        >
            <Tabs
              value={tabValue}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              aria-label="full width tabs example"
              scrollButtons="auto"
              variant="scrollable"
            >
              {tabs}
            </Tabs>
            {tabPanel}
        </Box>



      </Parallax>
    </Box>
  )
}

export default Projects