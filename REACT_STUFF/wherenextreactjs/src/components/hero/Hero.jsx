import React from 'react'
import HeroImage from '../../assets/images/hero.png'
import { BiPaperPlane } from 'react-icons/bi';
import { GrFormNextLink } from 'react-icons/gr';
import {Link} from 'react-router-dom'

import './hero.scss'
const Hero = () => {
  return (
    <div className='container'>
    <div className='first-fold'>
    <section className='first-fold-left'>
        <h5 className='orange-link'>Welcome! Where Next Platform</h5>
        <h2>Getting You Where You Want To <span className='orange-link'>Study</span>.
        <BiPaperPlane/>
        </h2>
        <p className='body-text'>
            Everything you need to know for your study abroad journey: from your first search to your first
            day on campus.
        </p>
        <Link to='about'>
            <button className='hero-cta arrow'>
                Get Started
            <GrFormNextLink className='arrow' style={{marginTop:`3px`}} color="white"/>
            </button>
        </Link>

    </section>
    <section className='first-fold-right'>
        <img src={HeroImage} className='hero-image' alt='hero'/>
    </section>
    </div>
  
    </div>
  )
}

export default Hero

