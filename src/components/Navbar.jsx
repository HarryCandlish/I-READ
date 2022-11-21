import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import {links} from '../data'
import {AiOutlineBars} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to='/' className='logo' ><ImBooks/></Link>
            <ul className='nav_links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <NavLink to={path}>{name}</NavLink>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn">
                <AiOutlineBars/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar