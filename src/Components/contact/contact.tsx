import React, { CSSProperties } from 'react'
import { Box, Paper } from '@mui/material';
import './contact.css'

function Contact() {
    return (
        <Box
            width={'100vw'}
            justifyContent={'center'}
            display={'flex'}
            overflow={'auto'}
        >
            <Paper
                elevation={3}
                className='contact-container'
            >
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
            </Paper>
        </Box>
  )
}

export default Contact