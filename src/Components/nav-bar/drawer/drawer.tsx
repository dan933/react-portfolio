import { Box, List, ListItemButton, ListItemText, SwipeableDrawer } from '@mui/material'
import React from 'react'
import { Link } from 'react-scroll'

interface Drawerprops{
    setDrawer: (value: React.SetStateAction<boolean>) => void,
    drawer:boolean
}

function Drawer(props: Drawerprops) {
    const listItems = [
        {
            name: 'About Me',
            link:'about'
        },
        {
            name: 'Projects',
            link:'projects'
        },
        {
            name: 'Education',
            link:'education'
        },
        {
            name: 'Contact',
            link: 'contact',
            isContact:true
        },
    ]

    const listItemsElement = listItems.map((item) => (
        <Link
            activeClass="active"
            to={item.link}
            spy={true} 
            smooth={true}
            offset={-10}
            duration={700}
            className='drawerButton'
        >
            <ListItemButton            
            className='drawerButton'
            >
                <ListItemText
                className='drawerButton'
                primary={item.name}
                />
            </ListItemButton>
        </Link>
    ))

  return (
    <SwipeableDrawer
        anchor={'left'}
        disableScrollLock={true}
        open={props.drawer}
        onClose={() => props.setDrawer(prev => !prev)}
        onOpen={() => props.setDrawer(prev => !prev)}
      >
    <Box
      sx={{width:'200px'}}
    >
        <List
            sx={{padding:'0px'}}
        >
            {listItemsElement}
        </List>

    </Box>

      </SwipeableDrawer>
  )
}

export default Drawer