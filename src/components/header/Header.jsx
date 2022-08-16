import React from 'react'
import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'

import LOGO from '../../assets/ya.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello It's</h5>
        <h1>Optional inc.</h1>
        <h5 className="text-light">HighTech Company</h5>
        <HeaderButtons />
        <HeaderSocials />

        <div className="logo">
          <img src={LOGO} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header