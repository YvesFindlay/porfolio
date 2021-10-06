import React from 'react';

import Form from '../../Form/Form';

import './Contact.scss'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__content">
                <h2> Something in mind?</h2>
                <h2> Get in touch </h2>
                <p>Feel free to reach out if you wanna collaborate with me, or simply have a chat</p>
            </div>
            <Form />
        </section>
    )
}

export default Contact;