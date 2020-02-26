import React from 'react';
import { useSpring, animated } from 'react-spring';

function NavBar () {

    const effect = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 5000,
            clamp: true
        }
    })

    return (
        <>
            <a href="/">
                <animated.div className="logo" style={effect}>Roger Takeshita</animated.div>
            </a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Experience</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Skills</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Side Projects</a></li>
                    <li><a href="/">Contact Me</a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;