import React from 'react'
import './about-me.css'

function AboutMe() {
  return (
      <div className="about-me-container">
          <div id='profile-card'>
            <img id='profile-picture' src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png" alt="" />
            <h1>John Doe</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, vel? At autem dolor dignissimos,
                pariatur voluptates earum aut ipsam nesciunt adipisci tempora officia fugiat modi dicta quo nostrum illum culpa!
            </p>
      </div>
      {
        //source https://codepen.io/pjwiebe/pen/VmmxpM
      }
      <div id='arrow-container'>
        <div className="arrow"></div>
        <span>scroll</span>
      </div>
      </div>
  )
}

export default AboutMe