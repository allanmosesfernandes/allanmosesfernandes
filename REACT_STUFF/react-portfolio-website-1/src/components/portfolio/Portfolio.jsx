import React from 'react'
import './portfolio.css'
import port1 from '../../assets/WORK-IT/starter.png';
import port2 from '../../assets/WORK-IT/croque.png';
import port3 from '../../assets/WORK-IT/home.png';
import port4 from '../../assets/WORK-IT/paisa.jpg';
import port5 from '../../assets/WORK-IT/yaan.png';
import port6 from '../../assets/WORK-IT/audio.png';

//====== DATA OBJECT =======//
const data = [
  {
    id: 1,
    image: port1,
    title: 'Starter Labs',
    github: 'https://github.com/allanmosesfernandes/thestarterlabswebsite',
    live: 'https://thestarterlabs.netlify.app/,'
  },
  {
    id: 2,
    image: port2,
    title: 'Croue Resorts Goa',
    github: 'https://github.com/allanmosesfernandes/C-Roque',
    live: 'https://thestarterlabs.netlify.app/,'
  },
  {
    id: 3,
    image: port3,
    title: 'Balhuas',
    github: 'https://github.com/allanmosesfernandes/',
    live: 'https://www.was-ist-los-mit-jaron.de/,'
  },
  {
    id: 4,
    image: port4,
    title: 'Budget Calculator',
    github: 'https://github.com/allanmosesfernandes/thestarterlabswebsite',
    live: 'https://thestarterlabs.netlify.app/,'
  },
  {
    id: 5,
    image: port5,
    title: 'Yaan Man',
    github: 'https://github.com/allanmosesfernandes/',
    live: 'https://thestarterlabs.netlify.app/,'
  },
  {
    id: 6,
    image: port6,
    title: 'Audio Oscillator',
    github: 'https://github.com/allanmosesfernandes/',
    live: 'https://thestarterlabs.netlify.app/,'
  },
]

const items = data.map((item) => {
       return(
         <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={item.image} alt='portfolio one' />
          </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
               
            </div>
        </article> 
       ) 
})

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {items}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt='portfolio one' />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
               
            </div>

        </article> */}
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt='portfolio one' />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
               
            </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt='portfolio one' />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
            </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt='portfolio one' />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
            </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt='portfolio one' />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
            </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt='portfolio one' />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
            </div>

        </article>
       */}
      
      </div>
    </section>
  )
}

export default Portfolio