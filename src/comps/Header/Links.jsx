import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <header id="header-div">
            <Link to='/'><div class="icon-div"><i class="fas fa-user icon"></i></div></Link>
        </header>
    );
};

export default Header;