import React, { useState } from 'react';
import emailjs from "emailjs";

const ContactMe = props => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        msg: ""
    });

    let handleReset = () => {
        setMessage({
            name: "",
            email: "",
            msg: ""
        });
    };

    let handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: [e.target.value]
        });
    };

    let handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <section className="section-contact-me container" id="menu-contact-me">
            <div className="contact">
                <p>Let's get in touch!</p>
                <form onSubmit={handleSubmit} className="my-form">
                    <div>
                        <input
                            name="contact-name"
                            value={message.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                        />
                        <input
                            name="contact-email"
                            type="email"
                            value={message.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                        />
                        <textarea
                            name="contact-msg"
                            value={message.msg}
                            rows="4"
                            onChange={handleChange}
                            placeholder="Your Message"
                        />
                        <input
                            className="button-submit"
                            type="submit"
                            value="Submit"
                            onSubmit={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
