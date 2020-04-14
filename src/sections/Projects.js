import React from 'react';
import { projectsData } from '../data/projectsData';

const Projects = (props) => {
    return (
        <section className="section-projects" id="menu-projects">
            <div className="projects container">
                <p> My Projects</p>
                <div className="my-projects">
                    {projectsData.map((project, idx) => {
                        return (
                            <div key={idx} className="project">
                                <p>{project.name}</p>
                                <a href={project.url} target="blank">
                                    <img src={project.image} alt="project img" className="project-img" />
                                </a>
                                <p>{project.description}</p>
                                <div className="project-little-icons">
                                    {project.technologies.map((tech, idxT) => {
                                        return <div key={idxT}>{tech}</div>;
                                    })}
                                </div>
                                <div className="repo">
                                    <i className="material-icons">code</i>
                                    <a href={project.repo} target="blank" className="link-code">
                                        Repo
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
