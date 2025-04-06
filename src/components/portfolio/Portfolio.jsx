import React, {useEffect} from 'react'
import AOS from 'aos'
import './portfolio.css'
import programmify from '../../assets/programmify-academy.png'
import estamuni from '../../assets/estamuni.jpg'
import shawarma from '../../assets/shawarma-house.png'
import tremolo from '../../assets/tremolo guitars.png'
import koolQuiz from '../../assets/kool-quiz.png'
import muscleMart from '../../assets/muscle-mart.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Portfolio = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    const data =[
        {
            id:1,
            image:programmify,
            websitename:'Programmify Academy',
            websiteicons: [
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript,
                FaNodeJs
            ],
            websitedescription: "Successfully led the development of programmify Academy, an educational platform that empowers students to master technical skills. I spearheaded the end-to-end development process, architecting a robust Node.js backend infrastructure while guiding the frontend team in creating an intuitive, responsive user interface.",
            websitelink: 'https://academy.programmify.org'
        },
        {
            id:2,
            image:estamuni,
            websitename:'ESTAM University',
            websiteicons: [
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript,
                FaNodeJs
            ],
            websitedescription: "Developed both the frontend and backend, creating the university info and course listings pages using Express Handlebars, CSS, and JavaScript. Built an admin dashboard with Node.js, Express, and MySQL to manage applicant data, store student information, and automate the sending of admission letters to accepted applicants.",
            websitelink: 'https://estamuni.net'
        },
        {
            id:3,
            image:shawarma,
            websitename:'Shawarma House',
            websiteicons: [
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript,
                FaReact
            ],
            websitedescription: "Created a fast food restaurant site with responsive design and exceptional visual aesthetic, delivering an intuitive and engaging user experience across all devices.",
            websitelink: 'https://shawarmahouse.netlify.app'
        },
        // {
        //     id:3,
        //     image:tremolo,
        //     websitename:'Tremolo guitars',
        //     websiteicons: [
        //         FaHtml5,
        //         FaCss3Alt,
        //         IoLogoJavascript,
        //         FaReact
        //     ],
        //     websitedescription: "Built the Tremolo Guitars website using React, HTML, CSS, and JavaScript. The site showcases a range of guitars for sale, with a responsive design and smooth user interface to enhance the browsing experience.",
        //     websitelink: 'https://tremologuitars.netlify.app'
        // },
        {
            id:4,
            image:muscleMart,
            websitename:'Muscle Mart',
            websiteicons: [
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript
            ],
            websitedescription: "Designed and developed the MuscleMart website from scratch using HTML, CSS, and JavaScript. Focused on creating a visually appealing and user-friendly interface with responsive design for an optimal shopping experience.",
            websitelink: 'https://musclemart.netlify.app/'
        },
        {
            id:5,
            image:koolQuiz,
            websitename:'Kool Quiz',
            websiteicons: [
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript,
                FaHtml5
            ],
            websitedescription: "Created Kool Quiz, a fun and engaging quiz website using HTML, CSS, and JavaScript. The site features a user-friendly interface and interactive elements that enhance the quiz-taking experience.",
            websitelink: 'https://koolquizgame.netlify.app/'
        }
    ]

    
  return (
    <div className='component__portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <div className='slashline'>
            <div className="line"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
        <div className="line"></div>
        </div>
        <div className="component__portfolio-content">
            <div className="component__portfolio-content-webdev">                 
               
                <div className="component__portfolio-content-webdev-all">
                {
                data.map(({image, websitename, websiteicons,websitedescription,websitelink},index)=>{
                    return(
                        <div className="component__portfolio-content-webdev-each" data-aos='fade-out'>
                            <div className="component__portfolio-content-webdev-each-image">
                                <img src={image} alt="" />
                            </div>
                            <div className="component__portfolio-content-webdev-each-technologies">
                                {websiteicons.map((Icon, index) => (
                                    <Icon key={index} className="tech-icon" />
                                ))}  
                            </div>
                            <div className="component__portfolio-content-webdev-each-content">
                                <h3><a href={websitelink} target='blank' rel="noreferrer">{websitename}</a></h3>
                                <p>{websitedescription}</p>
                            </div>
                            {/* <button><a href={websitelink} target='_blank'>Check Out</a></button> */}
                        </div>
                    )
                }
                )}
                </div>
                {/* <div style={{color:'white', display:'flex', justifyContent:'center'}} className='component__portfolio-content-webdev-see-more'>
                    <p style={{fontSize:'20px', color:'#ffffffc1'}}>View more projects...</p>
                </div> */}
            </div>


            {/* <div className="component__portfolio-content-illustration">
                <h2>Digital Illustration</h2>
            <div className="component__portfolio-content-illustration-all">
            {
            illustrationdata.map(({image},index)=>{
                return(
                    <div className="component__portfolio-content-illustration-each" data-aos='fade-out'>
                    <img src={image} alt="" />
                    </div>
                )
            }
            )}
            </div>
            </div> */}

        </div>
    </div>
  )
}

export default Portfolio