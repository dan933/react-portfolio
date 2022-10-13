import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './project-card.css';

function ProjectCard(props:any) {

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
            onClick={props.handleDialog}
            image={`ProjectImages/${props.card.img}`}
            alt=""
        />

        <CardContent
          sx={{
            overflow:'auto'
          }}
        >
            <Typography
              component={'span'} variant={'body2'}
            >
            {props.card.caption}
          </Typography>
          </CardContent>
          <CardActions
            className='action-container'
        >
          
          {
            props.card.IsDemoButton &&
            <Button
                size="small"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  marginLeft:'3px'
                }}
                variant="outlined"
                href={`${props.card.demoURL}`}
                target={'_blank'}
                
            >
                Demo
            </Button>
          
          }
          


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
    </>
  )
}

export default ProjectCard