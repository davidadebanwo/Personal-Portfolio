import React, { useEffect } from 'react'
import './footer.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import logo from '../../assets/D logo.png'
import {BsMessenger} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { BsEnvelope } from 'react-icons/bs'

const Footer = () => {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <div className="component__footer">
    <div className="component__footer-content" data-aos='fade-out'>
        <div className="component__footer-links">
            {/* <h2>Links</h2> */}
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#portfolio">Portfolio</a></p>
            <p><a href="#contact">Contact</a></p>
        </div>
        <div className="component__footer-socials">
          <a href='http://m.me/davidoluwasegun.adebanwo.9'target='_blank'><BsMessenger className='component__footer-social-each'/></a>
          <a href='mailto:davidadebanwo@gmail.com' target='_blank'><BsEnvelope className='component__footer-social-each'/></a>
          <a href='https://twitter.com/dave_O_A' target='_blank'><BsTwitter className='component__footer-social-each'/></a>
          <a href='https://api.whatsapp.com/send?phone=+250790927459'target='_blank'><BsWhatsapp className='component__footer-social-each'/></a>
          <a href='https://www.instagram.com/david_o_art'target='_blank'><BsInstagram className='component__footer-social-each'/></a>
        </div>
        </div>
        <h4>©2023 David O.A</h4>
    </div>
  )
}

export default Footer