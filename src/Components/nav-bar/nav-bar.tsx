import React from 'react'
import { Button, Toolbar } from '@mui/material';
import './nav-bar.css'



//Source https://codesandbox.io/s/2m8hfv?file=/demo.tsx

function NavBar() {
  return (
      <Toolbar
          className='nav-bar'
      >
          <Button variant="text">About Me</Button>
          <Button variant="text">Projects</Button>
          <Button variant="text">Education</Button>
          <Button variant="text">Contact</Button>
    </Toolbar>
  )
}

export default NavBar