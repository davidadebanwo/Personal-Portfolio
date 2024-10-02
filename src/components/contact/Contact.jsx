import React,{useEffect} from 'react'
import {useRef} from 'react'
import './contact.css'
import AOS from 'aos'
import emailjs from 'emailjs-com';

const Contact = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
},[])


  const form=useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        message: e.target.message.value
    };

    try {
        const response = await fetch('https://portfolio-api-liard.vercel.app/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Message sent successfully');
        } else {
            alert('Error sending message');
        }
    } catch (error) {
        console.error(error);
        alert('Failed to send message');
    }

    e.target.reset();
};


  return (

    <div className='component__contact' id='contact'>
        <h1>Contact</h1>
        <div className='slashline'>
            <div className="line"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
            <div className="slash"></div>
        <div className="line"></div>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos='fade-in'>
            <input type="text" name='firstname' required placeholder='First name'/>
            <input type="text" name='lastname'  required placeholder='Last name'/>
            <input type="email" name='email' required placeholder='Email'/>
            <textarea name="message" id="" cols="30" rows="10" required placeholder='Message'></textarea>
            <button className='button' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact