import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import './css/sections/intro.css';
// import './css/sections/experience.css';
// import './css/sections/sideprojects.css';
// import './css/sections/skills.css';
// import './css/sections/aboutme.css';
// import './css/sections/contactme.css';
// import './css/loading.css';
// import './css/keyframes.css';
// import './css/nightmode.css';
// import './css/mediaqueries.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
