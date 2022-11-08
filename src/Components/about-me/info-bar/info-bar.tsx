import { Box, Button } from '@mui/material'
import React from 'react'
import './info-bar.css'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function InfoBar() {
  return (
    <Box
      className='button-container'
    >
      <Button
        className='buttons'
        variant="outlined"
        href='CV-Daniel-Albert.pdf'
        download={'CV-Daniel-Albert.pdf'}
      >
        <DownloadIcon
          sx={{marginRight:'3px'}}
        /> CV
      </Button>
      <Button
        className='buttons'
        variant="outlined"
        href="mailto:danielalbert3377@gmail.com"
      >
        <EmailIcon
        sx={{marginRight:'3px'}}
        /> Email
      </Button>
      <Button
        className='buttons'
        variant="outlined"
        href='https://github.com/dan933'
        target="blank"
      >
        <GitHubIcon/> GitHub
      </Button>
    </Box> 
  )
}

export default InfoBar