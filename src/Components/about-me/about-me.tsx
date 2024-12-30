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

      <img id='profile-picture' src="./profile-picture.png" alt="" />
      <Box id='profile-card'>
        <Box>
          <p>
            Hello 😊, my name is Daniel Albert I'm excited to show you some of the projects I have been working on.
            I have worked with JavaScript frameworks/libraries such as React,
            and Angular. I have created .Net and NodeJS APIs and integrated them into various frontends.
            I am profeicient in aws services such as SQS, Lambda and Serverless.
          </p>
        </Box>
      </Box>
      <InfoBar />
      {
        //source https://codepen.io/pjwiebe/pen/VmmxpM
      }

    </Box>

  )
}

export default AboutMe