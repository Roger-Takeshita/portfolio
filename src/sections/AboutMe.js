import React from 'react';

const AboutMe = (props) => {
    return (
        <section className="section-about-me container" id="menu-about-me">
            <div className="profile">
                <h3>About Me</h3>
                <div>   
                    <img src="https://avatars3.githubusercontent.com/u/32579177?s=460&v=4" alt="profile" id="profile-pic"/>
                </div>
                <div className="profile-msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta nulla, veniam numquam est natus alias quibusdam maxime iusto aperiam fuga. Recusandae soluta ea alias necessitatibus nostrum, velit iusto eaque.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;