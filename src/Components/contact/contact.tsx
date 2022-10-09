import React, { CSSProperties, useEffect } from 'react'
import { Box, Paper, Slide } from '@mui/material';
import './contact.css'

function Contact() {

    const [slideChecked, setSlideChecked] = React.useState(false);

    const handleSlideChange = () => {

        if (!slideChecked) {
        setSlideChecked(true);      
        }    
    };

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
          if (window.scrollY >= 1456 && !slideChecked) {
            handleSlideChange()
          }
        };
    
        window.addEventListener('scroll', handleScroll);  
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    


    return (
        <>
            <Box
                className='contact-container'
            >
                <Slide direction="right" in={slideChecked} mountOnEnter unmountOnExit>
                    <Box>
                        <h1>Contact</h1>
                            <form
                            className='form-container'
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc18dF3ds8TMYPu5o0nHkIRut7_KltJ4dU9DJniihW0jjbNmg/formResponse"
                            method="post"
                            >
                            <input type="email" required placeholder="Email" name="entry.1888783603" className={'message-box'} ></input>
                            <textarea name="entry.287121295" required rows={15} placeholder="enter message" className={'message-box'} id=""></textarea>

                            <button type="submit" className="submit-button">Submit</button>
                            </form>
                    </Box>
                </Slide>
            </Box>
        </>
  )
}

export default Contact