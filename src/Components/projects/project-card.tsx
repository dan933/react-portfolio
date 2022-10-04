import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { IProjectCard } from '../../Models/project-card-model'
import GitHubIcon from '@mui/icons-material/GitHub';
function ProjectCard(props: { key: number; card: IProjectCard; }) {

  return (
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
        component = "img"
        height ="194"
        image={`ProjectImages/${props.card.img}`}
        alt=""
    />

    <CardContent
      sx={{
        maxHeight: '300px',
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
        >{props.card.IsDemoButton ? "Demo" : "Video"}</Button>
        {props.card.IsGitHubButton &&
          <Button size="small"
            sx={{ backgroundColor: 'white', color: 'black' }}
            variant="outlined"
          >
            <GitHubIcon/> &nbsp; GitHub
        </Button>}
      </CardActions>
    
  </Card>
  )
}

export default ProjectCard