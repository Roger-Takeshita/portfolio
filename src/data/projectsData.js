import pennyImg from '../images/projects/004-penny-pinchers.jpg';
import fellasImg from '../images/projects/003-bookfellas.jpg';
import icheatsImg from '../images/projects/002-icheats.jpg';
import minesweeperImg from '../images/projects/001-minesweeper.jpg';
import socketIoLogo from '../images/logos/technology_socketio.png';


export const projectsData = [
    {
        name: "Penny Pinchers",
        image: pennyImg,
        url: "https://penny-pinchers.herokuapp.com/",
        repo: "https://github.com/Roger-Takeshita/Penny-Pinchers",
        technologies: [
            'devicon-html5-plain-wordmark',
            'devicon-css3-plain-wordmark',
            'devicon-bootstrap-plain-wordmark',
            'devicon-javascript-plain-wordmark',
            'devicon-react-original-wordmark',
            'devicon-nodejs-plain-wordmark', 
            'devicon-express-original-wordmark', 
            'devicon-mongodb-plain-wordmark',
            'devicon-heroku-original-wordmark'
        ],
        internalTechnologies: [],
        description: "MERN stack expenses tracker app built with:",

    },
    {
        name: "Bookfellas",
        image: fellasImg,
        url: "https://bookfellas.herokuapp.com/",
        repo: "https://github.com/BookFellas/book-fellas",
        technologies: [
            'devicon-html5-plain-wordmark',
            'devicon-css3-plain-wordmark',
            'devicon-bootstrap-plain-wordmark',
            'devicon-javascript-plain-wordmark',
            'devicon-jquery-plain-wordmark',
            'devicon-python-plain-wordmark',
            'devicon-django-plain-wordmark',
            'devicon-heroku-original-wordmark'
        ],
        internalTechnologies: [],
        description: "Full-Stack book store application built with:",
    },
    {
        name: "iCheats",
        image: icheatsImg,
        url: "https://icheats.herokuapp.com/",
        repo: "https://github.com/Roger-Takeshita/iCheats",
        technologies: [
            'devicon-html5-plain-wordmark',
            'devicon-css3-plain-wordmark',
            'devicon-bootstrap-plain-wordmark',
            'devicon-javascript-plain-wordmark',
            'devicon-jquery-plain-wordmark',
            'devicon-nodejs-plain-wordmark', 
            'devicon-express-original-wordmark', 
            'devicon-mongodb-plain-wordmark',
            'devicon-heroku-original-wordmark'
        ],
        internalTechnologies: [
            socketIoLogo
        ],
        description: "Full-Stack social media application built with:",
    },
    {
        name: "Minesweeper",
        image: minesweeperImg,
        url: "https://roger-takeshita.github.io/game-minesweeper/",
        repo: "https://github.com/Roger-Takeshita/game-minesweeper",
        technologies: [
            'devicon-html5-plain-wordmark', 
            'devicon-css3-plain-wordmark', 
            'devicon-javascript-plain-wordmark', 
            'devicon-jquery-plain-wordmark',
            'devicon-github-plain-wordmark'
        ],
        internalTechnologies: [],
        description: "Single Page Application (SPA) built with:",
    }
]


//! Icons for future projects
// <i className="devicon-html5-plain-wordmark colored"/>
// <i className="devicon-css3-plain-wordmark colored"/>
// <i className="devicon-bootstrap-plain-wordmark colored"/>
// <i className="devicon-javascript-plain-wordmark colored"/>
// <i className="devicon-jquery-plain-wordmark colored"/>
// <i className="devicon-react-original-wordmark colored"/>
// <i className="devicon-nodejs-plain-wordmark colored"/>
// <i className="devicon-express-original-wordmark colored"/>
// <i className="devicon-python-plain-wordmark colored"/>
// <i className="devicon-django-plain-wordmark colored"/>
// <i className="devicon-mongodb-plain-wordmark colored"/>
// <i className="devicon-postgresql-plain-wordmark colored"/>
// <i className="devicon-mysql-plain-wordmark colored"/>
// <i className="devicon-heroku-original-wordmark colored"/>
// <i className="devicon-amazonwebservices-plain-wordmark-wordmark colored"/>
// <i className="devicon-photoshop-plain-wordmark colored"/>
// <i className="devicon-visualstudio-plain-wordmark colored"/>
// image: process.env.PUBLIC_URL + "/images/projects/002-icheats.jpg",