import { useState } from 'react'

import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import {links} from '../data'
import {AiOutlineBars} from 'react-icons/ai'
import {MdOutlineClose} from 'react-icons/md'
import {ImBooks} from 'react-icons/im'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav_container">
            <Link to='/' className='link' ><ImBooks className='logo'/></Link>
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
                
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
                
            </ul>
            <button className="nav_toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <AiOutlineBars/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar