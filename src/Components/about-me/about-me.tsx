import { Box } from '@mui/material'
import React from 'react'
import './about-me.css'
import InfoBar from './info-bar/info-bar'


function AboutMe() {
  return (

    
      <Box
      className='center-container'
      >
      <div className='spacer'></div>
      
      <img id='profile-picture' src="https://media-exp1.licdn.com/dms/image/C5103AQEaR53PARTl4A/profile-displayphoto-shrink_800_800/0/1583023980117?e=1671062400&v=beta&t=-nV6Rl1hxD4JWOg-tNw4pqXWhmijF5uftw15sgDGQnk" alt="" />
      <Box id='profile-card'>
        <Box>
          <p>
            Hello 😊, my name is Daniel Albert I'm excited to show you some of the projects I have been working on.
            I have worked with JavaScript frameworks/libraries such as React,
            and Angular I have also created .Net and NodeJS APIs and integrated them into the front end.
          </p>
        </Box>
      </Box>
      <InfoBar/>
        {
          //source https://codepen.io/pjwiebe/pen/VmmxpM
        }

      </Box>

  )
}

export default AboutMe