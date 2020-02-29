import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring';
import Scrollspy from 'react-scrollspy';

const NavBar2 = (props) => {

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

    const effectMenu = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 1500,
            clamp: true
        }
    })

    return (
        <Navbar bg="none" expand="lg" fixed="top">
            {/* <Navbar.Brand href="#home"><animated.div className="logo" style={effect}>Roger Takeshita</animated.div></Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <animated.div style={effectMenu}>
                    <Nav className="mr-auto">
                        <Scrollspy className="scrollspy-menu" items={['menu-about-me', 'menu-skills', 'menu-projects', 'menu-experience', 'menu-education', 'menu-contact-me']} currentClassName="menu-now">
                            <li><Nav.Link href="#menu-about-me">About Me</Nav.Link></li>
                            <li><Nav.Link href="#menu-skills">Skills</Nav.Link></li>
                            <li><Nav.Link href="#menu-projects">Projects</Nav.Link></li>
                            <li><Nav.Link href="#menu-experience">Experience</Nav.Link></li>
                            <li><Nav.Link href="#menu-education">Education</Nav.Link></li>
                            <li><Nav.Link href="#menu-contact-me">Contact Me</Nav.Link></li>
                        </Scrollspy>
                    </Nav>
                </animated.div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar2;