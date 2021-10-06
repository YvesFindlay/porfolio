import React, { useEffect } from "react";

import { gsap, Power1 } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import "./Project.scss";

const Project = () => {
    // grab from db or api?
    const projects = [
        {
            title: "The Quiz App",
            tools: 'HTML5, CSS3, JavaScript'
        }, {
            title: "IPhone Calculator",
            tools: 'HTML5, CSS3, JavaScript'
        }, {
            title: "Forecast",
            tools: 'HTML5, CSS3, JavaScript, React, Sass, GSAP'
        },
    ];

    const projectList = projects.map((_, ind) => (
        <React.Fragment key={ind} >
            <li className="line" />
            <li className="project">
                <div className="project__content">
                <div className="project__title">{projects[ind].title}</div>
                <div className="project__tools">{projects[ind].tools}</div>
                </div>
            </li>
        </React.Fragment>
    ));

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".line").forEach((line) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    endTrigger: line,
                    start: "-=380px center",
                    end: "bottom center",
                    // markers: true
                }
            });
        
            tl.fromTo(line, { scaleX: 0 },
            {
                duration: 0.6,
                ease: Power1.easeOut,
                scaleX: 1,
                transformOrigin: "left",
            }, ">");
        })
    }, [])
   
    
    return (
        <React.Fragment>
            {projectList}
        <li className="line" />
        </React.Fragment>
    )
    
}

export default Project;