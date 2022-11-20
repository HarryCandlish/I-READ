import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import {ImBooks} from 'react-icons/im'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to='/' className='logo' ><ImBooks/></Link>
        </div>
    </nav>
  )
}

export default Navbar