import React from 'react'
import './Navbar.css'
import logo from '../../logo.jpg'
export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='logo-img' src={logo} alt='logo image' />
            <ul className='nav-links'>
                <li>
                    <a href='/' className='nav-link'>home</a>
                </li>
                <li>
                    <a href='/' className='nav-link'>about</a>
                </li>
                <li>
                    <a href='/' className='nav-link active'>tours</a>
                </li>
            </ul>
        </nav>
    )
}
