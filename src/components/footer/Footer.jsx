import React, { useEffect } from 'react'
import './footer.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import logo from '../../assets/D logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { BsEnvelope } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <div className="component__footer" data-aos='fade-out'>
      <div className="component__footer-content">
        {/* <div className="component__footer-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#portfolio">Portfolio</a></p>
            <p><a href="#contact">Contact</a></p>
        </div> */}
        <div className="component__footer-socials">
          <a href='mailto:me@davidadebanwo.com' target='_blank'><BsEnvelope className='components__header-intro-social-each'/></a>
          <a href='https://www.linkedin.com/in/david-adebanwo'target='_blank'><BsLinkedin className='components__header-intro-social-each'/></a>
          <a href='https://twitter.com/dave_O_A' target='_blank'><BsTwitter className='components__header-intro-social-each'/></a>
          <a href='https://twitter.com/dave_O_A' target='_blank'><BsGithub className='components__header-intro-social-each'/></a>
        </div>
        <div className="component__footer-copyright">
          <p>© 2024 David O.A. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer