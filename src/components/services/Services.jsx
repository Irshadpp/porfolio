import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Interface Design: Design for simplicity and ease of use.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design: Ensure the design works on all devices.</p>
            </li>
            <li>
              <BiCheck id='check1' className='service__list-icon'/>
              <p>Improved User Experience: Improve the overall user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Consistency: Maintain a consistent look and feel.</p>
            </li>
            <li>
              <BiCheck id='check2' className='service__list-icon'/>
              <p>Clear Communication: Clear interface, clear actions, happy users</p>
            </li>
          </ul>
        </article>
        {/* end of ui/ux desighn */}

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck id='check3' className='service__list-icon'/>
              <p>Frontend Development: Creating website interfaces with HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <BiCheck id='check3' className='service__list-icon'/>
              <p>Frontend Frameworks: Using tools like React, Typescript, or Vue.js for interactive websites</p>
            </li>
            <li>
              <BiCheck id='chec4' className='service__list-icon'/>
              <p>Performance: Speeding up loading times for a better experience</p>
            </li>
            <li>
              <BiCheck id='check4' className='service__list-icon'/>
              <p>Performance: Speeding up loading times for a better experience</p>
            </li>
            <li>
              <BiCheck id='check3' className='service__list-icon'/>
              <p>Version Control: Tracking changes and collaborating with other developers using Git</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li> */}
          </ul>
        </article>
        {/* end of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck  id='check5' className='service__list-icon'/>
              <p>Server-Side Programming: Creating server-side logic using languages like Node.js</p>
            </li>
            <li>
              <BiCheck id='check6' className='service__list-icon'/>
              <p>Database Management: Organizing and managing data effectively</p>
            </li>
            <li>
              <BiCheck id='check5' className='service__list-icon'/>
              <p>API Building: Constructing secure APIs for frontend and backend communication.</p>
            </li>
            <li>
              <BiCheck id='check5' className='service__list-icon'/>
              <p>User Security: Implementing measures to keep user information safe and private.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li> */}
          </ul>
        </article>
        {/* end of Content Creation */}
      </div>
    </section>
  )
}

export default Services