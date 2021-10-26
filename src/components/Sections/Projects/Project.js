import React, { useEffect } from "react";

import { gsap, Power1 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./Project.scss";

const Project = () => {
  const projects = [
    {
      title: "Forecast - Weather API App",
      tools: "React, JavaScript, Sass, GSAP, Weather API",
      // code: "https://github.com/YvesFindlay/forecast",
    },
    {
      title: "Markdown Editor",
      tools:
        "React, Context API, JavaScript, Styled Components, React-Markdown",
      link: "https://yvesfindlay.github.io/markdown-editor/",
      code: "https://github.com/YvesFindlay/markdown-editor",
    },
    {
      title: "Admin Dashboard",
      tools: "React, JavaScript, Sass, Chart.js",
      link: "https://yvesfindlay.github.io/admin-dashboard/",
      code: "https://github.com/YvesFindlay/admin-dashboard",
    },
    {
      title: "IPhone Calculator",
      tools: "HTML5, CSS3, JavaScript",
      link: "https://yvesfindlay.github.io/calculator-app/",
      code: "https://github.com/YvesFindlay/calculator-app",
    },
    {
      title: "The Quiz App",
      tools: "HTML5, CSS3, JavaScript",
      link: "https://yvesfindlay.github.io/Quiz-app/",
      code: "https://github.com/YvesFindlay/Quiz-app",
    },
  ];

  const projectList = projects.map((map, ind) => (
    <React.Fragment key={ind}>
      <li className="line" />
      <li className="project">
        <div className="project__content">
          <div className="project__title">{projects[ind].title}</div>
          {projects[ind].title.includes("Forecast") && (
            <div className="project__status">Coming Soon...</div>
          )}
          {map.link && (
            <div className="project__links">
              <ul className="project__links-list">
                <li>
                  <a href={map.link}>View Demo</a>
                </li>
                <li>
                  <a href={map.code}>View Code</a>
                </li>
              </ul>
            </div>
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
