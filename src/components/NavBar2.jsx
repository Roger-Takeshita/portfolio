import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring';

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
            <Navbar.Brand href="#home"><animated.div className="logo" style={effect}>Roger Takeshita .·.</animated.div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"><animated.div style={effectMenu}>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Experience</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                    <Nav.Link href="#link">Side Projects</Nav.Link>
                    <Nav.Link href="#link">Contact Me</Nav.Link>
                </Nav></animated.div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar2;