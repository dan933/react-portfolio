import { Box } from '@mui/material'
import React from 'react'
import './about-me.css'
import InfoBar from './info-bar/info-bar'


function AboutMe() {
  return (

    
      <Box
      className='center-container'
      >
      <div className='spacer'>
      </div>
      <img id='profile-picture' src="https://media-exp1.licdn.com/dms/image/C5103AQEaR53PARTl4A/profile-displayphoto-shrink_800_800/0/1583023980117?e=1665619200&v=beta&t=mxXlrOARz1goda9-Z7odVNyXiuAJxoE-WO2S3JcS_To" alt="" />
      <Box id='profile-card'>
        <Box>
          <p>
            Hello 😊, my name is Daniel Albert I'm excited to show you some of the projects I have been working on.
            I have worked with JavaScript frameworks such as React,
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