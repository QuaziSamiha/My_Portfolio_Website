import React from 'react';
import './About.css';
import aboutImage from '../../images/aboutImage2.jpg';
// import aboutImage from '../../images/standpic.jpg'

const About = () => {
    return (
        <section className='about_section' id='about'>
            <div className='about_img'>
                <div className='img_div'>
                    <img src={aboutImage} alt="" />
                </div>
            </div>

            <div className='about_text'>
                <div className='text_div'>
                    <h4>About</h4>
                    <p>
                        I am a curious front end developer who is looking for a internship in
                        order to enhance my skills and gain more experience and knowledge. I am studying
                        in Computer Science and Engineering.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;