import React from 'react'
import './contact.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
                      <input type="email" required placeholder="Email" name="entry.1888783603" className={'message-box'} ></input>
                      <textarea name="entry.287121295" required rows={15} placeholder="enter message" className={'message-box'} id=""></textarea>

                      <button type="submit" className="submit-button">Submit</button>
                      </form>
          </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Contact