import React from 'react';
import { educationData } from '../data/educationData';

const Resume = (props) => {
    return (
        <section className="section-education container" id="menu-education">
            <div className="education">
                <p>EDUCATION</p>
                { educationData.map((institution, idx) => {
                    return (
                        <div className="institution" key={idx}>
                            <img src={institution.logo} alt="logo"/>
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