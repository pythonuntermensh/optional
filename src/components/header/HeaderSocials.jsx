import React from 'react'
import {BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><BsFacebook/></a>
        <a href='https://www.github.com/' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials