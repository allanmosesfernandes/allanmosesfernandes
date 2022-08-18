import React, {useState} from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Testimonial from './components/testimonials/Testimonial'
import Nav from './components/nav/Nav'
import Ser from './components/ser/Ser'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
const App = () => {
  return (
     <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Ser />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
     </>
  )
}

export default App