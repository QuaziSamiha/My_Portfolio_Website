import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className='message_div'>
            <h4>Send Message</h4>
            <div className='form_div'>
                <form action="https://formspree.io/f/xdoywgqo" method="post">
                    <input type="text" id='name' placeholder='Your Name' />
                    <input type="email" name="email" id="senderEmail" placeholder='Your Email' />
                    <textarea name="msg" id="" cols="30" rows="10" placeholder='write message...'></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;