import { Box, Paper, Slide } from '@mui/material'
import { Typography } from '@mui/material';
import React from 'react';
import './education.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Education() {

  const dipOfITBulletPoint = [
    'Developed and deployed two full stack applications using Azure cloud services',
    'Created a CICD pipelines for the project using Azure',
    'Collaborated with other developers using azure boards',
    'In the process of creating an admin dashboard for an organisation with DGI status',
    'Created a full stack application using React'].map((bullet,index) => (
      <li
        key={index}
        style={{marginBottom:'5px'}}
      >{bullet}</li>)
  )
  
  const associateDegreeBulletPoint = [
    '4.0 GPA',
    'Developed and deployed two fullstack applications using AWS cloud services',
    'Utilised Jira project management software',
    'Collaborated with other developers on GitHub'
  ].map((bullet,index) => (<li key={index} style={{marginBottom:'5px'}}>{bullet}</li>))


  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div
        className='education-container'
      >
        <div className='spacer'>
        </div>
        <Paper
        elevation={3}
        className='education-paper'
        >
          <Typography
            sx={{
              fontSize:'1rem',
              fontWeight:'bold'
            }}
            >Education</Typography>
            <Typography
            sx={{
              fontSize:'1rem',
              fontWeight:'bold'
            }}
            >
                Diploma of Information Technology (Advanced Programming)
            </Typography>
          <Box
            className='subheading'
            >
            <Typography
              marginBottom={'3px'}
            >Swinburne University of Technology</Typography>
              <Typography>2022 – In progress</Typography>
            </Box>
            <ul>
              {dipOfITBulletPoint}
            </ul>
            <Typography
            sx={{
              fontSize:'1rem',
              fontWeight:'bold'
            }}
            >
              Associate Degree of Applied Technology (Cloud Computing) – part time
            </Typography>
            <Box
              className='subheading'
            >
              <Typography
                marginBottom={'3px'}
              >Swinburne University of Technology</Typography>
                <Typography>2020 - 2021</Typography>
            </Box>
            <Typography
              marginBottom={'3px'}
              color={'gray'}
            >
              This course was discontinued however I achieved the following:
            </Typography>
            <ul>
              {associateDegreeBulletPoint}
          </ul>
          <Typography
            sx={{
              fontSize:'1rem',
              fontWeight:'bold'
            }}
            >
              Diploma of Accounting 
          </Typography>
          <Box
          className='subheading'
          >
          <Typography
            sx={{marginBottom:'10px'}}
          >Swinburne University of Technology</Typography>
            <Typography>2020</Typography>
          </Box>
        </Paper>
      </div>

    </AnimationOnScroll>
  )
}

export default Education