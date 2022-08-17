import React from 'react'

import {BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>Optional inc.</a>

      <ul className='permalinks'>
        <li><a href='/#'>Home</a></li>
        <li><a href='/#about'>About</a></li>
        <li><a href='/#experience'>Experience</a></li>
        <li><a href='/#services'>Services</a></li>
        <li><a href='/#portfolio'>Portfolio</a></li>
        <li><a href='/#testimonials'>Reviews</a></li>
        <li><a href='/#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><BsFacebook/></a>
        <a href='https://www.github.com/' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Optional inc. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer