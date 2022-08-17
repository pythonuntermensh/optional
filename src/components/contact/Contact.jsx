import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fmc01cl', 'template_u2ve6if', form.current, 'dJ56BS0R_UuzN3MIc')

    e.target.reset();

    document.getElementById('contacts-modal').style.display = 'block';
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>optionalofficial@optional.tech</h5>
            <a href="mailto:optionalofficial@optional.tech" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+7(937)66-22-164</h5>
            <a href="https://wa.me/79376622164" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@optionalusername</h5>
            <a href="tg://resolve?domain=optionalusername" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact