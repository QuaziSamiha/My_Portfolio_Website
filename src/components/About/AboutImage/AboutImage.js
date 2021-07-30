import React from 'react';
import './AboutImage.css';
import aboutImage from '../../../images/propic crop.jpg';

const AboutImage = () => {
    return (
        <div>
            <div className='about_img'>
                <img src={aboutImage} alt="" />
            </div>
        </div>
    );
};

export default AboutImage;