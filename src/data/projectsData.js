import React from 'react';
import myfollowupImg from '../images/projects/005-my-follow-up.jpg';
import pennyImg from '../images/projects/004-penny-pinchers.jpg';
import fellasImg from '../images/projects/003-bookfellas.jpg';
import icheatsImg from '../images/projects/002-icheats.jpg';
import minesweeperImg from '../images/projects/001-minesweeper.jpg';
import socketIoLogo from '../images/logos/languages_desc/socketio_desc.svg';
import nodeLogo from '../images/logos/languages_desc/nodejs_desc.svg';
import pythonLogo from '../images/logos/languages_desc/python_desc.svg';
import materialuiLogo from '../images/logos/languages/material-ui.svg';
import reduxLogo from '../images/logos/languages/redux.svg';

export const projectsData = [
    {
        name: 'My Follow-up',
        image: myfollowupImg,
        url: 'https://myfollowup.herokuapp.com/',
        repo: 'https://github.com/Roger-Takeshita/MyFollowUp',
        technologies: [
            <i className="devicon-mongodb-plain-wordmark colored" />,
            <i className="devicon-express-original" />,
            <i className="devicon-react-original-wordmark colored" style={{ color: 'darkblue' }} />,
            <img src={nodeLogo} alt="logo" />,
            <img src={reduxLogo} alt="logo" />,
            <i class="devicon-javascript-plain colored" style={{ background: 'black' }} />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <img src={materialuiLogo} alt="logo" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />
        ],
        description: 'MERN stack job application follow-up app built with:'
    },
    {
        name: 'Penny Pinchers',
        image: pennyImg,
        url: 'https://penny-pinchers.herokuapp.com/',
        repo: 'https://github.com/Roger-Takeshita/Penny-Pinchers',
        technologies: [
            <i className="devicon-mongodb-plain-wordmark colored" />,
            <i className="devicon-express-original" />,
            <i className="devicon-react-original-wordmark colored" style={{ color: 'darkblue' }} />,
            <img src={nodeLogo} alt="logo" />,
            <i class="devicon-javascript-plain colored" style={{ background: 'black' }} />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-bootstrap-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />
        ],
        description: 'MERN stack expenses tracker app built with:'
    },
    {
        name: 'Bookfellas',
        image: fellasImg,
        url: 'https://bookfellas.herokuapp.com/',
        repo: 'https://github.com/BookFellas/book-fellas',
        technologies: [
            <i className="devicon-django-plain-wordmark colored" />,
            <img src={pythonLogo} alt="logo" />,
            <i class="devicon-javascript-plain colored" style={{ background: 'black' }} />,
            <i className="devicon-jquery-plain-wordmark colored" />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-bootstrap-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />
        ],
        description: 'Full-Stack book store application built with:'
    },
    {
        name: 'iCheats',
        image: icheatsImg,
        url: 'https://icheats.herokuapp.com/',
        repo: 'https://github.com/Roger-Takeshita/iCheats',
        technologies: [
            <i className="devicon-mongodb-plain-wordmark colored" />,
            <i className="devicon-express-original" />,
            <img src={nodeLogo} alt="logo" />,
            <img src={socketIoLogo} alt="logo" />,
            <i className="devicon-javascript-plain colored" style={{ background: 'black' }} />,
            <i className="devicon-jquery-plain-wordmark colored" />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-bootstrap-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-heroku-original-wordmark colored" />
        ],
        description: 'Full-Stack social media application built with:'
    },
    {
        name: 'Minesweeper',
        image: minesweeperImg,
        url: 'https://roger-takeshita.github.io/game-minesweeper/',
        repo: 'https://github.com/Roger-Takeshita/game-minesweeper',
        technologies: [
            <i class="devicon-javascript-plain colored" style={{ background: 'black' }} />,
            <i className="devicon-jquery-plain-wordmark colored" />,
            <i className="devicon-html5-plain-wordmark colored" />,
            <i className="devicon-css3-plain-wordmark colored" />,
            <i className="devicon-github-plain-wordmark colored" />
        ],
        description: 'Single Page Application (SPA) built with:'
    }
];
