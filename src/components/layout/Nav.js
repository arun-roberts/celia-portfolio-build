import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <nav className='main-nav'>
                <ul className='main-nav__list'>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/portfolio"
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/motion"
                        >
                            Motion
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/inthekitchen"
                        >
                            In the kitchen
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='main-nav__item'>
                        <NavLink 
                            activeClassName="main-nav__link--active" 
                            className="main-nav__link" 
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <hr className="line line--full"/>
            </nav>
        </>
    )   
}

export default Nav