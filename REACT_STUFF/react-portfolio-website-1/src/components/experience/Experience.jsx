import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skill's I have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experience</small>
                </div>            

              </article>

              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experience</small>
                </div>

              </article>

              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experience</small>
                </div>

              </article>

              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experience</small>
                </div>

              </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experience</small>
                </div>

              </article>

              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experience</small>
                </div>

              </article>

              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experience</small>
                </div>

              </article>

              <article className='experience__details'> 
                <BsPatchCheckFill className='experience__icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experience</small>
                </div>

              </article>

          </div>
        </div>
      </div>
    </section> 
  )
}

export default Experience