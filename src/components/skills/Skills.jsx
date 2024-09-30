import React, { useEffect } from 'react';
import AOS from 'aos';
import './skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/nodejs.png';
import expressjs from '../../assets/expressjs.png';
import reactjs from '../../assets/reactjs.png';
import mysql from '../../assets/mysql.png';
import git from '../../assets/git.png';

// Import Swiper core and required modules
import {A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
        <Swiper
          modules={[A11y, Autoplay]} // Include Autoplay module
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 0, // Set delay to 0 for continuous movement
            disableOnInteraction: false,
          }}
          speed={2000} // Set speed for smoother transitions
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="component__skills-content-swiper"
        >
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={html} alt="html icon" />
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={css} alt="css icon" />
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={js} alt="js icon" />
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={nodejs} alt="node.js icon" />
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={expressjs} alt="express.js icon" />
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={reactjs} alt="react.js icon" />
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={mysql} alt="mysql icon" />
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img className="techIcon" src={git} alt="git icon" />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;