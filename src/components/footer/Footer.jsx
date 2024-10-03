import React from 'react'
import './footer.css'
import {BsLinkedin, BsTwitter, BsEnvelope, BsGithub} from 'react-icons/bs'

const Footer = () => {

  return (
    <div className="component__footer" >
      <div className="component__footer-content">
        <div className="component__footer-socials">
          <a href='mailto:me@davidadebanwo.com' target='_blank' rel="noreferrer"><BsEnvelope className='components__header-intro-social-each'/></a>
          <a href='https://www.linkedin.com/in/david-adebanwo'target='_blank' rel="noreferrer"><BsLinkedin className='components__header-intro-social-each'/></a>
          <a href='https://twitter.com/dave_O_A' target='_blank' rel="noreferrer"><BsTwitter className='components__header-intro-social-each'/></a>
          <a href='https://github.com/davidadebanwo' target='_blank' rel="noreferrer"><BsGithub className='components__header-intro-social-each'/></a>
        </div>
        <div className="component__footer-copyright">
          <p>© 2024 David O.A. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer