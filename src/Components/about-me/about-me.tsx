import React from 'react'
import './about-me.css'

function AboutMe() {
  return (
      <div className="about-me-container">
          <div id='profile-card'>
            <img id='profile-picture' src="https://media-exp1.licdn.com/dms/image/C5103AQEaR53PARTl4A/profile-displayphoto-shrink_800_800/0/1583023980117?e=1665619200&v=beta&t=mxXlrOARz1goda9-Z7odVNyXiuAJxoE-WO2S3JcS_To" alt="" />
            <h1>Daniel Albert</h1>
              <p>
                I'm a developer, interested in solving problems through code.
            </p>
      </div>
      {
        //source https://codepen.io/pjwiebe/pen/VmmxpM
      }
      <div id='arrow-container'>
        <div className="arrow"></div>
      </div>
      </div>
  )
}

export default AboutMe