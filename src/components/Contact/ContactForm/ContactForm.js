import React from 'react';
import './ContactForm.css';
import { useForm, ValidationError } from '@formspree/react';
// import { useState } from 'react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xdoywgqo");
    // const [sentMsg, setSentMsg] = useState(false);

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
        // setSentMsg(true);
    }

    return (
        <div className='message_div'>
            <h4>Send Message</h4>
            <div className='form_div'>
                <form onSubmit={handleSubmit} action="https://formspree.io/f/xdoywgqo" method="post">
                    <input type="text" id='name' placeholder='Your Name' />
                    <input type="email" name="email" id="senderEmail" placeholder='Your Email' />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <textarea name="msg" id="message" cols="30" rows="10" placeholder='write message...'></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button type="submit" disabled={state.submitting}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;