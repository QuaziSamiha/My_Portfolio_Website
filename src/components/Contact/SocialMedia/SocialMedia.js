import React from 'react';
import './SocialMedia.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const SocialMedia = () => {
    return (
        <section className='social_media_section'>
            <h4>More Ways to Get in Touch</h4>

            <div className='social_media_div'>
                <div>
                    <span className='contact_icon'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                </div>
                <div>
                    <a href="http://www.linkedin.com/in/quazi-samiha-tasnim" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className='social_media_div'>
                <div>
                    <span className='contact_icon'>
                        <FontAwesomeIcon icon={faMobileAlt} />
                    </span>
                </div>
                <div>
                    <a href="tel:+8801304396212" target="_blank" rel="noreferrer">
                        Mobile 
                    </a>
                </div>
            </div>
            <div className='social_media_div'>
                <div>
                    <span className='contact_icon'>
                        <FontAwesomeIcon icon={faWhatsappSquare} />
                    </span>
                </div>
                <div>
                    <a href="https://wa.me/8801728618332" target="_blank" rel="noreferrer">
                        Whatsapp
                    </a>
                </div>
            </div>
            <div className='social_media_div'>
                <div>
                    <span className='contact_icon'>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </span>
                </div>
                <div>
                    <a href="https://www.facebook.com/quazi.samiha.7" target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;