import React, {useEffect} from 'react'
import AOS from 'aos'
import './portfolio.css'
import tremolo from '../../assets/tremolo guitars.png'
import gpt3 from '../../assets/gpt3.png'


const Portfoliocontent1 = () => {
  return (
    <div className="component__portfolio-content-webdev-each" data-aos='zoom-out'>
        <img src={image} alt="" />
        <h3><a href="">{websitename}</a></h3>
        <p>{Websitedescription}</p>
        <button>Check Out</button>
    </div>
  )
}

export default Portfoliocontent1