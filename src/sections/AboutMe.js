import React from 'react';
import profilePic from '../images/assets/profile_pic.jpeg';

const AboutMe = (props) => {
    return (
        <section className="section-about-me container" id="menu-about-me">
            <div className="profile">
                <div>
                    <img src={profilePic} alt="profile" id="profile-pic" />
                </div>
                <div className="profile-msg">
                    <p>
                        Curious and detail-oriented, I approach problems with
                        creativity and efficiency.
                        <br />
                        My background in engineering has allowed me to develop
                        strong problem-solving skills and the love for
                        automating tasks.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
