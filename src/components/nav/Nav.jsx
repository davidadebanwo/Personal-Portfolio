import React from 'react'
import { useState } from 'react';
import './nav.css'
import logo from '../../assets/D logo.png'

const Nav = () => {
  const[toggleMenu,setToggleMenu]=useState(false)



  return (
    <div className='component__nav'>
        <div className="component__nav-websitename">
          <img src={logo} alt="" />
            <h1>avid O.A</h1>
        </div>
        <div className="component__nav-navbar">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#portfolio">Portfolio</a></p>
            <p><a href="#contact">Contact</a></p>
        </div>

        {
        toggleMenu
          ?<div className="hamburgerdivx" onClick={()=>setToggleMenu(false)}>
          <div className="hamburgerx1"></div>
          <div className="hamburgerx2"></div>
        </div>
        :<div className="hamburgerdiv" onClick={()=>setToggleMenu(true)}>
          <div className="hamburger1"></div>
          <div className="hamburger2"></div>
          <div className="hamburger3"></div>
        </div>
        }


        {toggleMenu&&(
          <div className="component__nav-verticalnav">
          <p><a href="#home"  onClick={()=>setToggleMenu(false)}>Home</a></p>
          <p><a href="#about" onClick={()=>setToggleMenu(false)}>About</a></p>
          <p><a href="#skills" onClick={()=>setToggleMenu(false)}>Skills</a></p>
          <p><a href="#portfolio" onClick={()=>setToggleMenu(false)}>Portfolio</a></p>
          <p><a href="#contact" onClick={()=>setToggleMenu(false)}>Contact</a></p>
        </div>)
        }
    </div>
  )
}

export default Nav