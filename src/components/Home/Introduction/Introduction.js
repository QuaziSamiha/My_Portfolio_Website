import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return (
        <div className='intro_text'>
            <h1>
                <span className='hello'>Hello</span>
                <br />
                I'm Samiha
            </h1>
            <h4>Front End Web Developer</h4>
            
            <button className='cv_btn'>
                <a target='_blank' href="https://drive.google.com/file/d/1v_03PlEvOjbEIQgDZlOdiVXlAo1T--Du/view?usp=sharing">
                    Download CV
                </a>
            </button>
        </div>
    );
};

export default Introduction;