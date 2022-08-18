import React from 'react'
import './about.css'
import Standing from '../../assets/Standing.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About</h2>


      <div className="container about__contanier">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Standing} alt="standing" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+  completed</small>
            </article>
          </div>
          
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quasi fuga cum aliquid, distinctio commodi eveniet beatae quidem rem voluptatem laborum reprehenderit ut dicta dignissimos iste cumque ullam, dolor enim.</p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About