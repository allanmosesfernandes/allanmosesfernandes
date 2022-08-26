import {Fragment, React} from 'react'
import {Outlet, Link} from 'react-router-dom'
import { GrFormNextLink } from 'react-icons/gr';

import './navbar.scss';
const Navbar = () => {
  return (
    <Fragment>
    <nav className='nav-container'>
        <Link to='/' className='nav-logo'>WhereNext?</Link>
        <div className='nav-center'>
            <Link to='about' className='nav-links'>About </Link>
            <Link to='/' className='nav-links'>Discover</Link>
            <Link to='/' className='nav-links'>Update</Link>
            <Link to='/' className='nav-links'>News</Link>
        </div>
        <div className='nav-sign-up arrow'>
            <Link to='/' className='nav-links'>Sign up </Link>
        </div>
    </nav>
    <Outlet />
    </Fragment>

  )
}

export default Navbar

// GrFormNextLink