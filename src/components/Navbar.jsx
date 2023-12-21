import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import { links } from '../data'
import {GiCrystalBars} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar = () => {
    const[isNavShowing, setIsNavshowing] = useState(false);
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className='logo' onClick={() => setIsNavshowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'} `}>
                {
                    links.map(({name, path}, index) =>{
                        return(
                            <li key={index}>
                                
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                                 onClick={() =>  setIsNavshowing(prev => !prev)}>{name}</NavLink>
                            </li>

                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() =>  setIsNavshowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/>: <GiCrystalBars/>
                }

            </button>
        </div>
    </nav>
  )
}

export default Navbar
