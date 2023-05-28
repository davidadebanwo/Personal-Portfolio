import React, {useEffect} from 'react'
import './about.css'
import Me from '../../assets/me.jpg'
import AOS from 'aos'

const About = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])

  return (
    <div className='component__about' id='about'>
        <div className="component__about-title">
            <h1>About</h1>
        <div className='slashline'>
            <div className="line"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
        <div className="line"></div>
        </div>
        </div>


        <div className="component__about-content" data-aos="fade-up">
            <div className="component__about-img">
                <img src={Me} alt="Me" />
            </div>

        <div className="component__about-content-exp-par" data-aos="fade-up">
            <div className="component__about-experience">
                <div className="component__about-experience-each">
                    <h2>Experience</h2>
                    <h4>~8 Months</h4>
                </div>
                <div className="component__about-experience-each">
                    <h2>Clients</h2>
                    <h4>3+</h4>
                </div>
                <div className="component__about-experience-each">
                    <h2>Projects</h2>
                    <h4>15+</h4>
                </div>
            </div>
            <div className="component__about-content-paragraph">
                <p>"Hi, I'm David, a web developer and illustrator with a passion for creating beautiful and functional designs. With a background in both web development and illustration, I bring a unique perspective to every project I work on. I have experience developing responsive and user-friendly websites using React, HTML, CSS, and JavaScript, as well as creating illustrations and graphics for various projects. My goal is to create designs that not only look great but also help businesses achieve their goals. When I'm not working on projects, you can find me exploring new art styles and web development trends to improve my skills."</p>
            </div>
            <div className="component__about-content-contact">
                <button><a href='#contact'>Contact me</a></button>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default About