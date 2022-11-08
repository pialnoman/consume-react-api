import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='center'>
                <NavLink to={`/`} className={({ isActive }) => isActive ? 'green' : undefined}>Home</NavLink>
                &nbsp;|&nbsp;
                <NavLink to={`/about`} className={({ isActive }) => isActive ? 'green' : undefined}>About</NavLink>
                &nbsp;|&nbsp;
                <NavLink to={`/contact`} className={({ isActive }) => isActive ? 'green' : undefined}>Contact Us</NavLink>
            </div>
        </>
    )
}
export default Navbar;