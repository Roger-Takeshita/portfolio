import React from 'react';
import { projectsData } from '../data/projectsData';

const Projects = (props) => {
    return (
        <section className="section-projects container" id="menu-projects">
            <div className="projects">
                <p> My Projects</p>
                <div className="my-projects">
                    {projectsData.map((project, idx) => {
                        return (
                            <div key={idx} className="project">
                                <p>{project.name}</p>
                                <a href={project.url} target="blank"><img src={project.image} alt="project img" className="project-img"/></a>
                                <p>{project.description}</p>
                                <div className="project-little-icons">
                                    {project.technologies.map((tech, idxT) => {
                                        return (
                                            <div key={idxT}>
                                                <i className={tech}/>
                                            </div>
                                        )
                                    })}
                                    {project.internalTechnologies.length > 0 && project.internalTechnologies.map((technologyPath, iconIdx) => {
                                        return (
                                            <div key={iconIdx}>
                                                <img src={technologyPath} className="project-little-imgs" alt="icon"/>
                                            </div>
                                        )
                                    })}
                                </div>
                                <a href={project.repo} target="blank" className="link-code"><i className="small material-icons">code</i>Repo</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;