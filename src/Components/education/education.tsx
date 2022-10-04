import { Box, Paper } from '@mui/material'
import { Typography } from '@mui/material';

function Education() {

  return (
    <Box
    sx={{
      display: 'flex',
      alignItems:'center',
      flexDirection: 'column',
    }}
    >

      <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding:'15px',
        maxWidth:'80vw',
        width:'600px',
      }}
      >
          <Typography
          sx={{
            fontSize:'1rem',
            fontWeight:'bold'
          }}
          >Education</Typography>
          <Typography
          sx={{
            fontSize:'1rem',
            fontWeight:'bold'
          }}
          >
              Diploma of Information Technology (Advanced Programming)
          </Typography>
          <Typography
            sx={{
              fontSize:'0.9rem',
              color:'gray'
            }}
          >
            Swinburne University of Technology 2022 – In progress
          </Typography>
      </Paper>
    </Box>
  )
}

export default Education