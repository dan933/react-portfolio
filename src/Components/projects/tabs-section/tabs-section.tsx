import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import { CardData } from '../../../data/project-data';
import ProjectCard from '../project-card';
import ProjectDialog from '../project-dialog/project-dialog';

function TabsSection(props:any) {

    interface TabPanelProps {
        children?: React.ReactNode;
        dir?: string;
        index: number;
        tabValue: number;
      }

    const [tabValue, setTabValue] = React.useState(0);

    function a11yProps(index: number) {
        return {
          id: `tab${index}`,
          'aria-controls': `tab${index}`,
        };
  }
  
  const [openDialog, setOpenDialog] = React.useState(false)
  
  const handleDialog = () => {
      setOpenDialog(prev => !prev)
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
    
    const tabs = CardData.map((card,index) => (
        <Tab label={card.title} key={index} {...a11yProps(index)}></Tab>
      ))
    
      const tabPanel = CardData.map((card, index) => (
    
        <TabPanel tabValue={tabValue} key={index} index={index}>
          <ProjectCard
            handleDialog= {handleDialog}
            key={index}
            card={card}
          />

          {!card.IsDemoButton &&
            <ProjectDialog
              card={card}
              handleDialog= {handleDialog}
              openDialog= {openDialog}
            />
          }
       </TabPanel> 
      ))
    
      const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
      };

    return (
      <Box
      sx={{maxWidth:'100vw'}}>
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
      </Box>
  )
}

export default TabsSection