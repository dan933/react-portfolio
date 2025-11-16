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

      <img id='profile-picture' src="./profile-picture.png" alt=""
      />
      <Box id='profile-card'>
        <Box
        sx={{ px: 3 }}
        >
          <p>
            Hello 😊, my name is Daniel Albert,
            I've been working as a software developer for 3 years and have been developing hobby projects for 5 years.
            </p>
            <p>
              I've created several key features in a sports payment application both the dashboard and the app,
              the app is used Australia wide by over 20,000 plus users.
              The application has over 50,000 plus downloads on the android play store.
            </p>
            <p>
              Some key features I developed and deployed across multiple applications include:
            </p>
              <ul>
                <li>Game day payment reminders</li>
                <li>Batch payment process for basketball organisations stripe integration and direct debits</li>
                <li>Archiving and summarising documents using AWS SQS, lambda and MongoDb</li>
                <li>Dulux Acratex App Personalisation google api integration (weather, places)</li>
                <li>Dulux Translation feature</li>
              </ul>
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