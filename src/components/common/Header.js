import React from 'react';
import logo from './logo.png'
import './header.css';

const Header = () => {
    return (
        <div className="Header">
        <img src={logo} alt="logo" className="Header-logo" />
        <p alt="title" className="title">AMICO</p>
        </div>
    );
}

export default Header;