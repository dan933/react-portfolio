import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material'
import React, { CSSProperties } from 'react'
import { IProjectCard } from '../../Models/project-card-model'
import GitHubIcon from '@mui/icons-material/GitHub';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});




function ProjectCard(props: { key: number; card: IProjectCard; }) {

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDialog = () => {
    setOpenDialog(prev => !prev);
  };

  const iframeStyle: CSSProperties = {
    overflow: 'auto',
    border: 'none',
    marginBottom:'10px'
  }

  return (
    <>
      <Card
      elevation={3}
      sx={{
        margin: '10px'
      }}
    >
      <CardHeader
        title={props.card.title}
        subheader={props.card.subtitle}
        />
        <CardMedia
          sx={{
            cursor:'pointer'
          }}
          component = "img"
          height="194"
          onClick={handleDialog}
          image={`ProjectImages/${props.card.img}`}
          alt=""
      />

      <CardContent
        sx={{
          overflow:'auto'
        }}
      >
        <Typography>
          {props.card.caption}
        </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ backgroundColor: 'white', color: 'black' }}
            variant="outlined"
            onClick={handleDialog}
          >{props.card.IsDemoButton ? "Demo" : "Video"}</Button>
          {props.card.IsGitHubButton &&
            <Button size="small"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                marginLeft:'3px'
              }}
              variant="outlined"
              href={`${props.card.gitHubLink}`}
              target={'_blank'}
            >
              <GitHubIcon/> &nbsp; GitHub
          </Button>}
        </CardActions>
      
      </Card>
      
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialog}
        aria-describedby={props.card.title}
    >
        <DialogTitle>
          {props.card.title}
        </DialogTitle>
        <DialogContent>
        <DialogContentText
          marginBottom={'5px'}
        >
        {props.card.subtitle}
      </DialogContentText>
          <Box
            display={'flex'}
            flexDirection={'column'}
            width={'500px'}
            justifyContent={'center'}
            marginBottom={'10px'}
            overflow={'auto'}
          >
            <iframe width={'500px'} height={'300px'} src={props.card.IsDemoButton ? props.card.demoURL : props.card.youtubeLink} title="NBA Application" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={iframeStyle} allowFullScreen></iframe>  
            <DialogContentText
              color={'black'}
            >
            {props.card.description}
          </DialogContentText>

          </Box>
      </DialogContent>
      <DialogActions>
          <Button
            onClick={handleDialog}
            variant="outlined"
          >Close</Button>
      </DialogActions>
      </Dialog>
    
    </>
  )
}

export default ProjectCard