import React from 'react';
import reduxLogo from '../images/logos/languages/redux.svg';
import pythonLogo from '../images/logos/languages/python.svg';
import materialuiLogo from '../images/logos/languages/material-ui.svg';
import jestLogo from '../images/logos/languages/jest.svg';

export const languagesData = [
    {
        name: 'React.js',
        icon: <i className="devicon-react-original colored language-icon" />
    },
    {
        name: 'Redux',
        icon: <img src={reduxLogo} className="local-logo" alt="logo" />
    },
    {
        name: 'Node.js',
        icon: <i className="devicon-nodejs-plain colored language-icon" />
    },
    {
        name: 'Express.js',
        icon: <i className="devicon-express-original colored language-icon" />
    },

    {
        name: 'Python',
        icon: <img src={pythonLogo} className="local-logo" alt="logo" />
    },
    {
        name: 'Django',
        icon: <i className="devicon-django-plain colored language-icon" />
    },
    {
        name: 'MongoDB',
        icon: <i className="devicon-mongodb-plain colored language-icon" />
    },
    {
        name: 'PostgreSQL',
        icon: <i className="devicon-postgresql-plain colored language-icon" />
    },
    {
        name: 'JavaScript',
        icon: <i className="devicon-javascript-plain colored language-icon" style={{ background: 'black' }} />
    },
    {
        name: 'jQuery',
        icon: <i className="devicon-jquery-plain colored language-icon" />
    },
    {
        name: 'HTML5',
        icon: <i className="devicon-html5-plain colored language-icon" />
    },
    {
        name: 'Sass',
        icon: <i className="devicon-sass-original colored language-icon" />
    },
    {
        name: 'Bootstrap4',
        icon: <i className="devicon-bootstrap-plain colored language-icon" />
    },
    {
        name: 'Material UI',
        icon: <img src={materialuiLogo} alt="logo" className="icons-skills-local" />
    },
    {
        name: 'CSS3',
        icon: <i className="devicon-css3-plain colored language-icon" />
    },
    {
        name: 'Heroku',
        icon: <i className="devicon-heroku-original colored language-icon" />
    },
    {
        name: 'AWS S3',
        icon: <i className="devicon-amazonwebservices-original colored language-icon" />
    },
    {
        name: 'Jest',
        icon: <img src={jestLogo} className="local-logo" alt="logo" />
    }
    // {
    //     name: 'Photoshop',
    //     icon: <i className="devicon-photoshop-plain colored language-icon" />
    // }
];
