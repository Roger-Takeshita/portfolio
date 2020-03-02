import React from 'react';
import { educationData } from '../data/educationData';

const Resume = (props) => {
    return (
        <section className="section-education" id="menu-education">
            <div className="education container">
                <p>Education</p>
                { educationData.map((institution, idx) => {
                    return (
                        <div className="institution" key={idx}>
                            <a href={institution.url} target="blank"><img src={institution.logo} alt="logo"/></a>
                            <p>{institution.course} | {institution.date}</p>
                            <p>{institution.name}</p>
                            <p>{institution.location}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Resume;