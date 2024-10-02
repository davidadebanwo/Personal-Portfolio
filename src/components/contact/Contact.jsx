import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS for animation

const Contact = () => {
  const [loading, setLoading] = useState(false); // Manage loading state
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when submitting

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

    setLoading(false); // Set loading to false when done
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
        <input type="text" name='firstname' required placeholder='First name' />
        <input type="text" name='lastname' required placeholder='Last name' />
        <input type="email" name='email' required placeholder='Email' />
        <textarea name="message" cols="30" rows="10" required placeholder='Message'></textarea>
        <button className='button' type='submit'>
          {loading ? (
            <div className="loading-spinner" width="100px"></div> // Loading spinner when submitting
          ) : (
            'Submit' // Default text when not loading
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;