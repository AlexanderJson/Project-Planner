import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header id="header-div">
            <div class="icon-div">
            <i class="fas fa-user icon" onClick={toggleMenu}></i>
            </div>
            {menuOpen && (
            <div className="link-div">
            <ul>
            <li><Link to='/github'><div class="icon-div"><i class="fab fa-github icon"></i></div></Link></li>
            <li><Link to='/schedule'><div class="icon-div"><i class="far fa-calendar-alt icon"></i></div></Link></li>
            <li><Link to='/brainstorm'><div class="icon-div"><i class="fas fa-lightbulb icon"></i></div></Link></li>
            <li><Link to='/upload'><div class="icon-div"><i class="fas fa-code icon"></i></div></Link></li>
            <li><Link to='/chat'><div class="icon-div"><i class="fas fa-comments icon"></i></div></Link></li>
            <li><Link to='/profile'><div class="icon-div"><i class="fas fa-user icon"></i></div></Link></li>
            </ul>
            </div>
            )}
        </header>
    );
};

export default Header;