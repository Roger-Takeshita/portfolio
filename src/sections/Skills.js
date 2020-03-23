import React from 'react';
import { languagesData } from '../data/languagesData';
import { Parallax } from 'react-parallax';
import bgTwo from '../images/assets/background_002.png';

const Skills = (props) => {
    return (
        <section className="section-skills" id="menu-skills">
            <Parallax bgImage={bgTwo} strength={500}>
                <div className="skills container">
                    <p>Skills</p>
                    <div className="languages">
                        {languagesData.map((language, idx) => {
                            return (
                                <div key={idx} className="icons-skills">
                                    {language.icon}
                                    <p>{language.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Parallax>
        </section>
    );
};

export default Skills;
