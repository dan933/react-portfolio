import { Box } from '@mui/material'
import React from 'react'
import './about-me.css'

function AboutMe() {
  return (
      <div className="about-me-container">
          <div id='profile-card'>
            <img id='profile-picture' src="https://media-exp1.licdn.com/dms/image/C5103AQEaR53PARTl4A/profile-displayphoto-shrink_800_800/0/1583023980117?e=1665619200&v=beta&t=mxXlrOARz1goda9-Z7odVNyXiuAJxoE-WO2S3JcS_To" alt="" />
        {/* <h1>Daniel Albert</h1> */}
        <Box>
          <p>
            Hello 😊, my name is Daniel Albert I'm excitted to show you some of the projects I have been working on. I have worked with javascript frameworks such as React and Angular
            I have also created .Net and NodeJS APIs and integrated them into the front end.
          </p>
          
        </Box>
      </div>
      {
        //source https://codepen.io/pjwiebe/pen/VmmxpM
      }
      <div id='arrow-container'>
        <div className="arrow"></div>
      </div>
      </div>
  )
}

export default AboutMe