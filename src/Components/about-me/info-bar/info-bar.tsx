import { Alert, Box, Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import './info-bar.css'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';

function InfoBar() {

    const [openSnack, setOpenSnack] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
    const [snackType, setSnackType] = useState<"success" | "error">("success");

  const emailShare = async (e:React.MouseEvent<HTMLButtonElement>) =>{
    e?.preventDefault?.();
    try {
     await navigator?.clipboard?.writeText?.("danielalbert3377@gmail.com")
  
      setSnackMessage("Email copied to clipboard.")
      setSnackType("success")
      setOpenSnack(true);
      
    } catch (error) {
      
    }finally{
      window.location.href = "mailto:danielalbert3377@gmail.com"

    }

  }

  return (
    <>
    <Box
      className='button-container'
    >
      <Button
        className='buttons'
        variant="outlined"
        href='CV-Daniel-Albert.pdf'
        download={'CV-Daniel-Albert.pdf'}
      >
        <DownloadIcon
          sx={{marginRight:'3px'}}
        /> CV
      </Button>
      <Button
        className='buttons'
        variant="outlined"
        onClick={(e) => emailShare(e)}
      >
        <EmailIcon
        sx={{marginRight:'3px'}}
        /> Email
      </Button>
      <Button
        className='buttons'
        variant="outlined"
        href='https://github.com/dan933'
        target="blank"
      >
        <GitHubIcon/> GitHub
      </Button>
    </Box>
    <Snackbar
      open={openSnack}
      autoHideDuration={3000}
      onClose={() => {setOpenSnack(false)}}
      action={<Button onClick={() => {setOpenSnack(false)}}><CloseIcon/></Button>}
    >
      <Alert onClose={() => {setOpenSnack(false)}} severity={snackType} sx={{width:"100%"}}>
        {snackMessage}
      </Alert>
    </Snackbar>
    </>
  )
}

export default InfoBar