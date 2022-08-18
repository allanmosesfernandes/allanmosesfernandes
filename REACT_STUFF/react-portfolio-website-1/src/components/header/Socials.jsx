import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="http://" target="_blank" rel="noopener noreferrer"><BsLinkedin size={'2em'} /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={'2em'}/></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><FaDribbbleSquare size={'2em'}/></a>
    </div>
  )
}

export default Socials