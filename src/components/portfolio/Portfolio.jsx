import React, {useEffect} from 'react'
import AOS from 'aos'
import './portfolio.css'
import estamuni from '../../assets/estamuni.jpg'
import tremolo from '../../assets/tremolo guitars.png'
import gpt3 from '../../assets/gpt3.png'
import koolQuiz from '../../assets/kool-quiz.png'
import muscleMart from '../../assets/muscle-mart.png'
import digital1 from '../../assets/digital illustration1.png'
import digital2 from '../../assets/digital illustration2.png'
import digital3 from '../../assets/digital illustration3.png'
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
            id:1,
            image:tremolo,
            websitename:'Tremolo guitars',
            websiteicons: [
                FaHtml5,
                FaCss3Alt,
                IoLogoJavascript,
                FaReact
            ],
            websitedescription: "Built the Tremolo Guitars website using React, HTML, CSS, and JavaScript. The site showcases a range of guitars for sale, with a responsive design and smooth user interface to enhance the browsing experience.",
            websitelink: 'https://tremologuitars.netlify.app'
        },
        // {
        //     id:2,
        //     image:gpt3,
        //     websitename:'GPT-3 Website',
        //     websiteicons: [
        //         FaHtml5,
        //         FaCss3Alt,
        //         IoLogoJavascript,
        //         FaReact
        //     ],
        //     websitedescription: "HTML, CSS, JavaScript, React",
        //     websitelink: 'https://openaigpt3site.netlify.app'
        // },
        {
            id:3,
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
        },
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
        }
    ]

    const illustrationdata=[
        {
            id:1,
            image:digital1
        },
        {   id:2,
            image:digital2
        },
        {   id:3,
            image:digital3
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
{/*                 
                <h2>Web Development Projects</h2> */}
                <FaHtml5 />                
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
                                <h3><a href={websitelink} target='blank'>{websitename}</a></h3>
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