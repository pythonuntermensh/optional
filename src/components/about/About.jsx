import React from 'react'

import { MdWorkOutline } from 'react-icons/md'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { MdOutlineSupportAgent } from 'react-icons/md'
import ABOUT_US_IMG from '../../assets/CV.png'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={ABOUT_US_IMG} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <HiOutlineUserGroup className='about__icon'/>
              <h5>Staff</h5>
              <small>10+ Professionals </small>
            </article>
            <article className="about__card">
              <MdOutlineSupportAgent className='about__icon'/>
              <h5>24/7 Help</h5>
              <small>Instant Support</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt, laboriosam ab nihil, corrupti sed numquam perspiciatis magni eos similique doloremque a ullam impedit. Rem at porro tempore expedita repellendus.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default About