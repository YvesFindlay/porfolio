import React, { useEffect } from "react";
import expandLineAnimation from "../../../HelperFunctions/expandLineAnimation";
import { gsap, Power1 } from "gsap";

import "./Skills.scss";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML5",
    "Sass",
    "CSS3",
    "Bootstrap",
    "Figma",
    "GSAP3",
    "npm",
  ];
  const skillElems = skills.map((skill, ind) => {
    return (
      <div key={ind} className="skills__item">
        {skill}
      </div>
    );
  });

  useEffect(() => {
    gsap.set(".skills__wrapper", { xPercent: -50, yPercent: -50 });
    // on mobile change boxWidth based on viewport height
    const boxWidth = 700;
    const totalWidth = boxWidth * 9; //  * n of boxes
    const no01 = document.querySelectorAll("#no01 .skills__item");
    const fromLeft = "-=" + totalWidth;

    const mod = gsap.utils.wrap(0, totalWidth);

    const marquee = (which, time, direction) => {
      gsap.set(which, {
        x: (i) => {
          return i * boxWidth;
        },
      });

      const slide = gsap.timeline().to(which, {
        x: direction,
        modifiers: {
          x: (x) => mod(Number.parseFloat(x)) + "px",
        },

        duration: time,
        ease: "none",
        repeat: -1,
      });

      return slide;
    };

    expandLineAnimation({
      selector: ".skills .skills__wrapper::before",
      trigger: ".skills__wrapper",
      endTrigger: ".skills__wrapper",
      start: "top center",
      end: "bottom center",
      transformOrigin: "left",
      // markers: true
    });

    expandLineAnimation({
      selector: ".skills .skills__wrapper::after",
      trigger: ".skills__wrapper",
      endTrigger: ".skills__wrapper",
      start: "top center",
      end: "bottom center",
      transformOrigin: "right",
      delay: 0.5,
    })
      .to(".skills__item", { opacity: 1, ease: Power1.easeInOut }, ">")
      .add(marquee(no01, 20, fromLeft));
  }, []);

  return (
    <section className="skills">
      <div className="skills__wrapper">
        <div id="no01" className="skills__container">
          {skillElems}
        </div>
      </div>
      <p>A list of skills I've acquired over the years</p>
    </section>
  );
};

export default Skills;
