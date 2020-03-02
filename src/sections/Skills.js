import React from 'react';
import { languagesData } from '../data/languagesData';
import { Parallax } from "react-parallax";

const Skills = (props) => {
    return (
        <div className="section-skills" id="menu-skills" sytle={{backgroundColor: 'grey'}}>
                <Parallax bgImage={'/images/assets/background_002.png'} strength={500} >
                    <div className="skills container">
                        <p>Skills</p>
                        <div style={{ height: 500 }} className="languages">
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
                </Parallax>
        </div>
    )
}

export default Skills;