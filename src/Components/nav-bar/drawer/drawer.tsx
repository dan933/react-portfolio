import { Box, List, SwipeableDrawer } from '@mui/material'
import React from 'react'

interface Drawerprops{
    setDrawer: (value: React.SetStateAction<boolean>) => void,
    drawer:boolean
}

function Drawer(props: Drawerprops) {
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
      <List>
      
      </List>

    </Box>

      </SwipeableDrawer>
  )
}

export default Drawer