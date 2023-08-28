import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import emailjs from 'emailjs-com'

function Contact() {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bksrkn6', 'template_mfn3es8', form.current, '_Kd-hagD-sq6Hj2uv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>irshadpp13@gmail.com</h5>
            <a href="mailto:irshadpp13@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8943445520</h5>
            <a href="https://api.whatsapp.com/send?phone=+918943445520" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FiPhoneCall className='contact__option-icon'/>
            <h4>Call</h4>
            <h5>+91 8943445520</h5>
            <a href="mailto:irshadpp13@gmail.com" target='_blank'>Connect with me</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact