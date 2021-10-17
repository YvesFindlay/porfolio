import React, { useEffect } from "react";

import { gsap, Power1 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./Project.scss";

const Project = () => {
  const projects = [
    {
      title: "The Quiz App",
      tools: "HTML5, CSS3, JavaScript",
    },
    {
      title: "IPhone Calculator",
      tools: "HTML5, CSS3, JavaScript",
    },
    {
      title: "Forecast - Weather API App",
      tools: "HTML5, CSS3, JavaScript, React, Sass, GSAP",
    },
  ];

  const projectList = projects.map((_, ind) => (
    <React.Fragment key={ind}>
      <li className="line" />
      <li className="project">
        <div className="project__content">
          <div className="project__title">{projects[ind].title}</div>
          {projects[ind].title.includes("Forecast") && (
            <div className="project__status">Coming Soon...</div>
          )}
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
          delay: 0.4,
          trigger: line,
          endTrigger: line,
          start: "top-=350px center",
          end: "bottom center",
          // markers: true
        },
      });

      tl.fromTo(
        line,
        { scaleX: 0 },
        {
          duration: 0.5,
          ease: Power1.easeOut,
          scaleX: 1,
          transformOrigin: "left",
        },
        ">"
      );
    });
  }, []);

  return (
    <React.Fragment>
      {projectList}
      <li className="line" />
    </React.Fragment>
  );
};

export default Project;
