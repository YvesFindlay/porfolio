import React, { useEffect } from "react";
import Project from "./Project";
import { createSplitText,  splitText } from '../../../HelperFunctions/textRevealAnimation';

import "./Projects.scss";

const Projects = () => {
    useEffect(() => {
        const h1Split = createSplitText({ 
            el: ".projects__title", 
            linesClass: "split-child" 
        });

        createSplitText({ 
            el: ".projects__title", 
            linesClass: "split-parent" 
        });

        splitText({
            el: h1Split.lines,
            stagger: 0.3,
            trigger: ".projects",
            endTrigger: ".projects", // find way to select individual line classes
            start: "top center",
            end: "bottom center",
            markers: true
        });

    }, []);

    return (
        <section className="projects">
            <div className="projects__title-container">
                <div className="projects__title">Projects and</div>
                <div className="projects__title">selected works</div>
            </div>

            <ul className="projects__container">
                <Project />
            </ul>
          
        </section>
    )
}

export default Projects;