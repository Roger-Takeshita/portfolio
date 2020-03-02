import React, { useState } from "react";
import emailjs from "emailjs-com";
import { GoFilePdf } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";

const ContactMe = props => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        msg: ''
    });

    let handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: [e.target.value]
        });
    };

    let handleSubmit = async e => {
        e.preventDefault();
        let data = {
            user_name: message.name,
            user_email: message.email,
            message_html: message.msg
        };
        
        try {
            await emailjs.send(
                'default_service',
                'emailjs_portifolio',
                data,
                'user_svVzdsNvPIpH9UZdGsjUw'
            )
            setMessage({
                name: '',
                email: '',
                msg: ''
            });
        } catch (err) {
            console.log(err);
        }
    };

    function isFormValid() {
        return !(message.name.length > 0 && message.email.length > 0 && message.msg.length > 0 && message.name[0] !== '' && message.email[0] !== '' && message.msg[0] !== '')
    }

    return (
        <section className="section-contact-me" id="menu-contact-me">
            <div className="contact container">
                <p>Let's get in touch!</p>
                <form onSubmit={handleSubmit} className="my-form">
                    <div>
                        <input
                            name="name"
                            onChange={handleChange}
                            value={message.name}
                            placeholder="Your Name"
                        />
                        <input
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={message.email}
                            placeholder="Your Email"
                        />
                        <textarea
                            name="msg"
                            rows="4"
                            onChange={handleChange}
                            value={message.msg}
                            placeholder="Your Message"
                        />
                        <input
                            className="button-submit"
                            type="submit"
                            value="Submit"
                            disabled={isFormValid()}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </form>
                <div className="external-links">
                    <div className="resume">
                        <a
                            href="https://docs.google.com/document/d/1vQQLgN3zpeOSmfbG8JS0XfBbCKVp2u9ri3b8KJfvTWU/edit?usp=sharing"
                            target="blank"
                        >
                            <GoFilePdf size="1.7rem" />
                            <p>Resume</p>
                        </a>
                    </div>
                    <p> Follow me at:</p>
                    <div className="social-media">
                        <a
                            href="https://github.com/Roger-Takeshita"
                            target="blank"
                        >
                            <FaGithub size="1.7rem" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/roger-takeshita/"
                            target="blank"
                        >
                            <FaLinkedin size="1.7rem" />
                        </a>
                        <a
                            href="https://www.instagram.com/roger.takeshita/"
                            target="blank"
                        >
                            <TiSocialInstagram size="1.7rem" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCTA3Kd4KxeD6GnZCfLZbYaA"
                            target="blank"
                        >
                            <TiSocialYoutube size="1.7rem" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
