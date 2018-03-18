import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="primary-nav">
            <nav className="primary-nav__container">
                <ul>
                    <li><Link to="/colours"><a>Colours</a></Link></li>
                    <li><Link to="/typography"><a>Typography</a></Link></li>
                    <li><Link to="/components"><a>Components</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;