import { Box, Paper } from '@mui/material'
import { Typography } from '@mui/material';
import React, { CSSProperties } from 'react';

function Education() {
  const dipOfITBulletPoint = [
    'Developed and deployed two full stack applications using Azure cloud services',
    'Created a CICD pipelines for the project using Azure pipeline',
    'Collaborated with other developers using azure boards',
    'In the process of creating an admin dashboard for an organisation with DGI status',
    'Created a full stack application using React'].map(bullet => (
      <li
        style={{marginBottom:'5px'}}
      >{bullet}</li>)
  )
  
  const associateDegreeBulletPoint = [
    '4.0 GPA',
    'Developed and deployed two fullstack applications using AWS cloud services',
    'Utilised Jira project management software',
    'Collaborated with other developers on GitHub'
  ].map(bullet => (<li style={{marginBottom:'5px'}}>{bullet}</li>))


  return (
    <Box
    sx={{
      display: 'flex',
      alignItems:'center',
      flexDirection: 'column',
    }}
    >

      <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
        padding: '15px',
        marginBottom:'10px',
        maxWidth:'80vw',
        width: '600px',
        overflow:'auto'
      }}
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
          sx={{
            display: 'flex',
            flexWrap:'wrap',
            justifyContent: 'space-between',
            fontSize:'0.9rem',
            color: 'gray'
            }}
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
            sx={{
              display: 'flex',
              flexWrap:'wrap',
              justifyContent: 'space-between',
              fontSize:'0.9rem',
              color: 'gray'
              }}
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
            Unfortunately, this course was discontinued however I achieved the following: 

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
        sx={{
          display: 'flex',
          flexWrap:'wrap',
          justifyContent: 'space-between',
          fontSize:'0.9rem',
          color: 'gray'
          }}
        >
        <Typography
          sx={{marginBottom:'10px'}}
        >Swinburne University of Technology</Typography>
          <Typography>2020</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default Education