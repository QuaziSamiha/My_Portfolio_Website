import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';
import SocialMedia from '../SocialMedia/SocialMedia';

const Contact = () => {
    return (
        <section className="contact_section" id='contact'>
            <h2>Contact Me</h2>
            <div className="contact_area">
                <div className='social_media'>
                    <SocialMedia />
                </div>
                <div className='contact_form'>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;