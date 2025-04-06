import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS for animation

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: '' });
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Handle toast notification
  useEffect(() => {
    let timer;
    if (toast.visible) {
      timer = setTimeout(() => {
        setToast({ ...toast, visible: false });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

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
        showToast('Message sent successfully!', 'success');
      } else {
        showToast('Error sending message', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Failed to send message', 'error');
    }

    setLoading(false);
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
            <div className="loading-spinner"></div>
          ) : (
            'Submit'
          )}
        </button>
      </form>

      {/* Toast Notification */}
      {toast.visible && (
        <div className={`toast-notification ${toast.type} ${toast.visible ? 'show' : ''}`}>
          <div className="toast-icon">
            {toast.type === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            )}
          </div>
          <div className="toast-message">{toast.message}</div>
          <button className="toast-close" onClick={() => setToast({ ...toast, visible: false })}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;