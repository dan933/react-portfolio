import React from 'react'
import { AppBar, Box, Button, Divider, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import './nav-bar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';



//Source https://codesandbox.io/s/2m8hfv?file=/demo.tsx

function NavBar(props:any) {

  return (

    <Box 
      sx={{paddingBottom:'25px'}}
    >
      <AppBar component="nav">
        <Toolbar
            className='nav-bar'
        >
          <Box
          >
            <Button
              onClick={props.openDrawer}
             sx={{ display: { xs: 'block', sm: 'none' } }}>
              <MenuIcon/>
            </Button>
          </Box>
          <Box
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link
              activeClass="active"
              to="about"
              spy={true} 
              smooth={true}
              offset={0}
              duration={700}
            >
              <Button variant="text">
                About Me
              </Button>
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true} 
              smooth={true}
              offset={0}
              duration={700}
            >
              <Button variant="text">
                Projects
              </Button>
            </Link>


            <Link
              activeClass="active"
              to="education"
              spy={true} 
              smooth={true}
              offset={0}
              duration={700}
            >
              <Button variant="text">
                Education
              </Button>
            </Link>

              <Link
                  activeClass="active"
                  to="contact"
                  spy={true} 
                  smooth={true}
                  offset={20}
                  duration={700}
  
              >
                <Button variant="text">
                  Contact
                </Button>
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
      
  )
}

export default NavBar