import React, {useEffect} from 'react'
import AOS from 'aos'
import './portfolio.css'
import tremolo from '../../assets/tremolo guitars.png'
import gpt3 from '../../assets/gpt3.png'
import koolQuiz from '../../assets/kool-quiz.png'
import muscleMart from '../../assets/muscle-mart.png'
import digital1 from '../../assets/digital illustration1.png'
import digital2 from '../../assets/digital illustration2.png'
import digital3 from '../../assets/digital illustration3.png'

const Portfolio = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    const data =[
        {
            id:1,
            image:tremolo,
            websitename:'Tremolo guitars',
            websitedescription: "HTML, CSS, JavaScript, React",
            websitelink: 'https://tremologuitars.netlify.app'
        },
        {
            id:2,
            image:gpt3,
            websitename:'GPT-3 Website',
            websitedescription: "HTML, CSS, JavaScript, React",
            websitelink: 'https://openaigpt3site.netlify.app'
        },
        {
            id:3,
            image:koolQuiz,
            websitename:'Kool Quiz',
            websitedescription: "HTML, CSS, JavaScript",
            websitelink: 'https://koolquizgame.netlify.app/'
        },
        {
            id:4,
            image:muscleMart,
            websitename:'Muscle Mart',
            websitedescription: "HTML, CSS, JavaScript",
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
                
                <h2>Web Development Projects</h2>
                <div className="component__portfolio-content-webdev-all">
                {
                data.map(({image, websitename,websitedescription,websitelink},index)=>{
                    return(
                        <div className="component__portfolio-content-webdev-each" data-aos='fade-out'>
                            <img src={image} alt="" />
                            <h3><a href="">{websitename}</a></h3>
                            <p>{websitedescription}</p>
                            <button><a href={websitelink} target='_blank'>Check Out</a></button>
                        </div>
                    )
                }
                )}
                </div>
            </div>


            <div className="component__portfolio-content-illustration">
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
            </div>

        </div>
    </div>
  )
}

export default Portfolio