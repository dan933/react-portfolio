import React from 'react'
import './contact.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Button, TextField } from '@mui/material';

function Contact() {  

  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div
          className='contact-container'
      >
          <div className='spacer'>
          </div>
        
          <div>
                  <h1>Contact</h1>
                      <form
                      className='form-container'
                      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc18dF3ds8TMYPu5o0nHkIRut7_KltJ4dU9DJniihW0jjbNmg/formResponse"
                      method="post"
                      >
                      <TextField label="Email" variant="outlined" type="email" required name="entry.1888783603"></TextField>
                      <TextField label="Message" multiline={true} minRows={3} variant="outlined" name="entry.287121295" required id=""/>

                      <Button type="submit" variant="contained" className="submit-button">Submit</Button>
                      </form>
          </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Contact