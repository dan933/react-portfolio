import React, { FormEventHandler, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import './contact.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContactService from './contactService';

function Contact() {

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setLoading(true);
    await ContactService.submitContactForm(form.email, form.message).then((resp) => {

      console.log("resp", resp);

      if(resp.danEmailSent){
        setSnackMessage("Message Submitted")
        setSnackType("success")
        setOpenSnack(true);
      }else{
        setSnackMessage("Sorry something went wrong.")
        setSnackType("error")
        setOpenSnack(true);
      }


    }).catch(() => {

      setSnackMessage("Sorry something went wrong.")
      setSnackType("error")
      setOpenSnack(true);
      
    }).finally(() => {

      setLoading(false);
      setForm({email:"", message:""});

    });
  }

  const [form, setForm] = useState<{email:string; message:string}>(
    {email:"", message:""}
  )

  const [loading, setLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackType, setSnackType] = useState<"success" | "error">("success");


  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div
            className='contact-container'
        >
            <div className='spacer'>
            </div>
          
            <div>
                    <h1>Contact</h1>
                        <form
                        onSubmit={handleSubmit}
                        className='form-container'
                        method="post"
                        >
                          <TextField disabled={loading} label="Email" variant="outlined" type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})}></TextField>
                          <TextField disabled={loading} label="Message" multiline={true} minRows={3} variant="outlined" required value={form.message} onChange={e => setForm({...form, message:e.target.value})}/>

                          <Button disabled={!form.email || !form.message} type="submit" variant="contained" className="submit-button">
                            {
                              loading ? (
                                <CircularProgress size={25} color='inherit' />
                              ) : (
                                <span>Submit</span>
                              )
                            }
                           
                          </Button>
                        <div>
                        </div>
                        </form>
            </div>
        </div>
      </AnimationOnScroll>
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

export default Contact