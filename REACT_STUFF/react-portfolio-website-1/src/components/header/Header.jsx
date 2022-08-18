import React from 'react'
import CTA from './CTA'
import Socials from './Socials'
import Nerd from '../../assets/nerd.png'
import './header.css'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Allan Fernandes</h1>
        <h5 className="text-light">Frontend Developer</h5>
  
      <CTA />
      <Socials />
      <div className="me">
        <img src={Nerd} alt='nerd' />
      </div>

      <div className="scroll">
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
      
      </div>
    </header>
  )
}

export default Header