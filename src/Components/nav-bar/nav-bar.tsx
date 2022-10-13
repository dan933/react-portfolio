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
            sx={{ display: { xs: 'none', sm: 'flex', alignItems:'center' } }}
          >
            <img src="./web-logo.png" alt="" style={{maxWidth:'4rem', padding:'8px', marginLeft:'auto'}} />
          </Box>
          <Box
              sx={{ display: { xs: 'flex', sm: 'none', alignItems:'center' } }}
            >
              <Button
                onClick={props.openDrawer}
              > 
                <MenuIcon/>
              </Button>
              <img src="./web-logo.png" alt="" style={{maxWidth:'4rem', padding:'8px'}} />
          </Box>
          <Box
            className='nav-bar-container'
          >

            <Box
              sx={{ display: { xs: 'none', sm: 'flex', alignItems:'center' } }}
            >
              <Link
                activeClass="active"
                to="about"
                spy={true} 
                smooth={true}
                offset={-30}
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
                    offset={0}
                    duration={700}
                >
                  <Button variant="text">
                    Contact
                  </Button>
                </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
      
  )
}

export default NavBar