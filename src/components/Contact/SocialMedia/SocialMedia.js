import React from 'react';
import './SocialMedia.css';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGithubSquare, faLinkedin, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

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
                    <a href="www.linkedin.com/in/quazi-samiha-tasnim" target="_blank">
                        LinkedIn
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
                    <a href="https://wa.me/8801728618332" target="_blank">
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
                    <a href="https://www.facebook.com/quazi.samiha.7" target="_blank">
                        Facebook
                    </a>
                </div>
            </div>
            <div className='social_media_div'>
                <div>
                    <span className='contact_icon'>
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </span>
                </div>
                <div>
                    <a href="https://github.com/QuaziSamiha" target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;