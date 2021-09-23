import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>im header</h1>
            <img src={logo} alt="" className='logo' />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory </a>
            </nav>

             

        </div>
    );
};

export default Header;