import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className='main_header'>
        <div className="container main_header-container">
          <div className="main_header-left">
              <h4>#100DaysOfReading</h4>
                <h1>Reading Your Way Foward</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia, alias molestiae corporis</p>
                <Link to='/plans' className='btn lg'>Get Started</Link>
          </div>
          <div className="main_header-right">
              <div className="main_header-circle">
              </div>
                <div className="main_header-image">
                  {/* <img src={Image} alt='main header image'/> */}
                </div>
          </div>
        </div>
    </header>
  )
}

export default MainHeader