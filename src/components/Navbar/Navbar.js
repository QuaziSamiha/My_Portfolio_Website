import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar nav_bar navbar-expand-md fixed-top'>
                <div className='container'>
                    <div className='nav_logo'>
                        <h3>Samiha</h3>
                    </div>

                    <button className='navbar-toggler nav_btn' type='button' data-bs-toggle='collapse' data-bs-target='#nav-menu'>
                        <span className='navbar-toggler-icon bx bx-menu'></span>
                    </button>

                    <div className='collapse navbar-collapse nav_menu justify-content-end' id='nav-menu'>
                        <ul className='navbar-nav'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#work">Works</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

// className='menu'
export default Navbar;