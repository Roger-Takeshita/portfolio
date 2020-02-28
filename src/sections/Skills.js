import React from 'react';
import { languagesData } from '../data/languagesData';

const Skills = (props) => {
    return (
        <div className="section-skills container" id="menu-skills">
            <div className="skills">
                <h3>Skills</h3>
                <div className="languages">
                    {languagesData.map((language, idx) => {
                        return (
                            <div key={idx} className="icons-skills">
                                {language.icon}
                                <p>{language.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;