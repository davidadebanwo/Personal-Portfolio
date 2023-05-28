import React, { useEffect } from 'react'
import './header.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {BsMessenger} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import draw from '../../assets/draww.png'
import { BsEnvelope } from 'react-icons/bs'

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
          <p>I am a web developer and illustrator with a passion for creating high-quality and visually appealing websites.</p>
        </div>
        <div className="component__header-intro-socials">
          <a href='http://m.me/davidoluwasegun.adebanwo.9'target='_blank'><BsMessenger className='components__header-intro-social-each'/></a>
          <a href='mailto:davidadebanwo@gmail.com' target='_blank'><BsEnvelope className='components__header-intro-social-each'/></a>
          <a href='https://twitter.com/dave_O_A' target='_blank'><BsTwitter className='components__header-intro-social-each'/></a>
          <a href='https://api.whatsapp.com/send?phone=+250790927459'target='_blank'><BsWhatsapp className='components__header-intro-social-each'/></a>
          <a href='https://www.instagram.com/david_o_art'target='_blank'><BsInstagram className='components__header-intro-social-each'/></a>
          
        </div>
      </div>
      <div className="component__header-pic" data-aos='fade-down'>
        <img src={draw} alt="" />
      </div>

    </div>
  )
}

export default Header