import React from 'react'
import { useState } from 'react'

import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsBookmarkStar } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import './nav.css'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><HiOutlineUserGroup/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkStar/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav