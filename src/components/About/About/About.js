import React from 'react';
import './About.css';
import AboutImage from '../AboutImage/AboutImage';
import AboutText from '../AboutText/AboutText';

const About = () => {
    return (
        <section className='about_section' id='about'>
            <AboutImage />
            <AboutText />
        </section>
    );
};

export default About;