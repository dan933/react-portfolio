import React, { CSSProperties, useEffect } from 'react'
import { Box, Paper, Slide } from '@mui/material';
import './contact.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Contact() {

    const [slideChecked, setSlideChecked] = React.useState(false);

    const handleSlideChange = () => {

        if (!slideChecked) {
        setSlideChecked(true);      
        }    
    };
  useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 2313 && window.screen.width <= 280 && !slideChecked) {
            handleSlideChange()
          }else
          if (window.scrollY >= 1889 && window.screen.width >= 480 && !slideChecked) {
            handleSlideChange()
          } else
          if (window.scrollY >= 2100 && window.screen.width < 480 && !slideChecked) {
            handleSlideChange()
          }
        };
    
        window.addEventListener('scroll', handleScroll);  
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    


    return (
      <Element
        name='contact'
      >
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
        </Element>
  )
}

export default Contact