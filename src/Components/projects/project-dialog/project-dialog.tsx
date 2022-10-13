import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { CSSProperties } from 'react'

function ProjectDialog(props: any) {
    
    const iframeStyle: CSSProperties = {
        overflow: 'auto',
        border: 'none',
        marginBottom:'10px'
      }


    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
        ) {
        return <Slide direction="down" ref={ref} {...props} />;
        });


    return (
      <Dialog
        open={props.openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleDialog}
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
            onClick={props.handleDialog}
            variant="outlined"
          >Close</Button>
      </DialogActions>
      </Dialog>
    )
}

export default ProjectDialog