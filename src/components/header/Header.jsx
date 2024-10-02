import React, { useEffect } from 'react'
import './header.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {BsLinkedin, BsTwitter, BsEnvelope, BsGithub} from 'react-icons/bs'
import draw from '../../assets/draww.png'

const Header = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <div className='component__header' id='home'>
      <div className="component__header-intro" data-aos='fade-up'>
        <div className="component__header-intro-about">
          <h2><span>Hello</span>, My name is </h2>
          <h3>David Oluwasegun Adebanwo</h3>
          <p>I craft clean, efficient websites and applications, from intuitive frontends to robust backends. With over 2 years of experience, I’m dedicated to building digital solutions that work seamlessly. Take a look at my work, and let's bring your vision to life.</p>
          {/* <p>I am a web developer and illustrator with a passion for creating high-quality and visually appealing websites.</p> */}
        </div>
        <div className="component__header-intro-socials">
          <a href='mailto:me@davidadebanwo.com' target='_blank'><BsEnvelope className='components__header-intro-social-each'/></a>
          <a href='https://www.linkedin.com/in/david-adebanwo'target='_blank'><BsLinkedin className='components__header-intro-social-each'/></a>
          <a href='https://twitter.com/dave_O_A' target='_blank'><BsTwitter className='components__header-intro-social-each'/></a>
          <a href='https://github.com/davidadebanwo' target='_blank'><BsGithub className='components__header-intro-social-each'/></a>

        </div>
      </div>
      <div className="component__header-pic" data-aos='fade-down'>
        <img src={draw} alt="Cartoonish self portrait" />
      </div>

    </div>
  )
}

export default Header