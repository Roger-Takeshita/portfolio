import React, { useState, useEffect } from 'react';
import { experienceData } from '../data/experienceData';

const Experience = (props) => {
    const [screen, setScreen] = useState({width: window.innerWidth, screenIdx: 0});

    useEffect(() => {
        function handleScreenSize() {
            let screenIdx = 0;
            if (screen.width <= 414) {
                screenIdx = 0;
            } else if (screen.width <= 768) {
                screenIdx = 1;
            } else {
                screenIdx = 2;
            }
            setScreen({width: window.innerWidth, screenIdx});
        }
        
        window.addEventListener('resize', handleScreenSize);
        return () => 
            window.removeEventListener('resize', handleScreenSize);
    }, [screen.width]);

    return (
        <section className="section-experience container" id="menu-experience">
            <div className="experiences">
                <p>Experience</p>
                { experienceData.map((exp, idx) => {
                    return (
                        <div key={'company' + idx} className="company">
                            <p>{exp.company}<a href={exp.link} target="blank"><i className="material-icons link-icon">open_in_browser</i></a></p>
                            <p>{exp.title} | {exp.date}</p>
                            <p>{exp.briefDescription}</p>
                            <p>Responsabilities:</p>
                            <ul>
                                {exp.responsabilities[screen.screenIdx].map((descrip, descripIdx) => {
                                    return (
                                        <li key={descripIdx}>{descrip}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Experience;