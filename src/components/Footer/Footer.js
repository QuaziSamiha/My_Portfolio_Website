import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer_section'>
            <h6>
                <FontAwesomeIcon icon={faCopyright} /> Copyright  
                 2021, Quazi Samiha Tasnim. All Rights Reserved.
            </h6>
        </footer>
    );
};

export default Footer;