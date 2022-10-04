import './projects.css'
import { Parallax } from 'react-scroll-parallax';
import { Box } from '@mui/system';
import React from 'react';
import { CardData } from '../../data/project-data';
import ProjectCard from './project-card';
import { IProjectCard } from '../../Models/project-card-model';

function Projects() {

  const cardProjects = CardData.map((card:IProjectCard, index) => (
    <ProjectCard
      key={index}
      card={card}
    />
  ))
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column'
      }}
    >
      <Parallax
        translateX={['-100%', '0%']}
        startScroll={100}
        endScroll={500}
      >
        <h1>Projects</h1>
        <Box
          sx={{
            maxWidth: '80vw',
            width: '400px',
            mb: 2,
            maxHeight: '80vh',
            overflowX:'hidden',
            overflowY:'auto'
          }}
        >
          {cardProjects}
        </Box>

      </Parallax>
      </Box>
  )
}

export default Projects