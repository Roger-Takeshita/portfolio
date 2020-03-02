import React from 'react';

const AboutMe = (props) => {
    return (
        <section className="section-about-me container" id="menu-about-me">
            <div className="profile">
                <div>   
                    <img src="/images/assets/profile_pic.jpeg" alt="profile" id="profile-pic"/>
                </div>
                <div className="profile-msg">
                    <p>Curious and detail-oriented, I tend to approach problems with creativity and efficiency first.<br/> My background in engineer has allowed me to develop strong problem-solving skills and the love for automating repetitive tasks.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;