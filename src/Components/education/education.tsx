import { Box, Paper, Slide } from '@mui/material'
import { Typography } from '@mui/material';
import React, { CSSProperties, useEffect } from 'react';
import './education.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Education() {


  const dipOfITBulletPoint = [
    'Developed and deployed two full stack applications using Azure cloud services',
    'Created a CICD pipelines for the project using Azure pipeline',
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

  const [slideChecked, setSlideChecked] = React.useState(false);

  const handleSlideChange = () => {

    if (!slideChecked) {
      setSlideChecked(true);      
    }    
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1100 && !slideChecked) {
        handleSlideChange()
      }
    };

    window.addEventListener('scroll', handleScroll);  

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Element
      name="education"
    >
      <Box
        className='container'>
        
        <Slide direction="right" in={slideChecked} mountOnEnter unmountOnExit>
          <Box
            className='education-container'
          >
      
            <Box>
              <h1>Education</h1>
              <Paper
              elevation={3}
              className='education-paper'
              >
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
                className='subheading'
                >
                <Typography
                  sx={{marginBottom:'10px'}}
                >Swinburne University of Technology</Typography>
                  <Typography>2020</Typography>
                </Box>
              </Paper>    
            </Box>
            <Link
              activeClass="active"
              to="contact"
              spy={true} 
              smooth={true}
              offset={20}
              duration={500}
            >
              <Box className="arrow"></Box>
            </Link>
      
          </Box>
        </Slide>

      </Box>
    </Element>

  )
}

export default Education