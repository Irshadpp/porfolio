import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderActive } from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>8+ Comleted Projects</small>
            </article>
          </div>

          <p>
          I am a full stack developer with a passion for creating captivating web applications. My expertise spans both front-end and back-end technologies, allowing me to craft seamless user experiences. Let's work together to bring your ideas to life and make an impact in the digital world.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About