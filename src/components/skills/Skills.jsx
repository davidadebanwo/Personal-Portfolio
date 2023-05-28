import React, {useEffect} from 'react'
import AOS from 'aos'
import './skills.css'

const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <div className='component__skills' id='skills'>
        <h1>My Skills</h1>
        <div className='slashline'>
            <div className="line"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
        <div className="line"></div>
        </div>
        <div className="component__skills-content">
        <div className="component__skills-frontend" data-aos='fade-up'>
            <h2>Frontend Development</h2>
            <div className="component__skills-frontend-content">
            <div className="component__skills-frontend-each">
                <h3>HTML</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadhtml">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>CSS</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadcss">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>JavaScript</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadjs">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>React</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadreact">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>Bootstrap</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadreact">
                    </div>
                </div>
            </div>
          </div>
        </div>


        <div className="component__skills-frontend" data-aos='fade-up'>
            <h2>Other Skills/ Hobbies</h2>
            <div className="component__skills-frontend-content">
            <div className="component__skills-frontend-each">
                <h3>Digital Illustration</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloaddi">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>Music Production</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadmp">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>Piano</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadpiano">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>Guitar</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadguitar">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>Bass</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadbass">
                    </div>
                </div>
            </div>
            <div className="component__skills-frontend-each">
                <h3>Spanish</h3>
                <div className="component__skills-frontend-each-bar">
                    <div className="component__skills-frontend-each-barloadspanish">
                    </div>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Skills