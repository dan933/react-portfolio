import React, { CSSProperties } from 'react'

const aboutMeContainer: CSSProperties = {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    overflow:'auto'
}

const profilePicture: CSSProperties = {
    width: '200px',
    maxWidth:'90vw',
    borderRadius:'50%'
}

const profileCard: CSSProperties = {
    width: '300px',
    maxWidth: '90vw',
}

function AboutMe() {
  return (
      <div style={aboutMeContainer}>
          <div style={profileCard}>
            <img style={profilePicture} src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png" alt="" />
            <h1>John Doe</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, vel? At autem dolor dignissimos,
                pariatur voluptates earum aut ipsam nesciunt adipisci tempora officia fugiat modi dicta quo nostrum illum culpa!
            </p>
          </div>

    </div>
  )
}

export default AboutMe