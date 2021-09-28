import React, { useEffect } from 'react';
import Section from '../Section';
import expandLineAnimation from '../../../HelperFunctions/expandLineAnimation';
import { gsap, Power1 } from 'gsap';

import './Skills.scss'

const Skills = () => {
    // const skillsDOM = useRef([]);
    // https://greensock.com/forums/topic/16036-animate-after/

    useEffect(() => {
      gsap.set('.skills__wrapper',{xPercent:-50,yPercent:-50})

      const boxWidth = 180;
      const totalWidth = boxWidth * 10;  //  * n of boxes
      const no01 = document.querySelectorAll("#no01 .skills")
      const fromLeft = "-=" + totalWidth;
          
      const mod = gsap.utils.wrap(0, totalWidth);
        
      const marquee = (which, time, direction) => {
        gsap.set(which, {
          x:(i) => {
            return i * boxWidth;
          }
        });

        const slide = gsap.timeline().to(which,  {
          x: direction,
          modifiers: {
            x: x => mod(Number.parseFloat(x)) + "px"
          },
        
          duration:time, ease:'none',
            repeat:-1,
        });

        return slide;
      } 


    // gsap.registerPlugin(CSSRulePlugin);

    // const rule = CSSRulePlugin.getRule(".skills__wrapper::before");


    // look into using bind method here to preset all repeating arguments

     expandLineAnimation({
      selector: ".skills__wrapper::before",
      trigger: ".skills__wrapper",
      endTrigger: ".skills__wrapper",
      start: "-=100px center",
      end: "bottom center",
      transformOrigin: "left",
    })

    expandLineAnimation({
      selector: ".skills__wrapper::after",
      trigger: ".skills__wrapper",
      endTrigger: ".skills__wrapper",
      start: "-=100px center",
      end: "bottom center",
      transformOrigin: "right",
      delay: 0.5,
    }).from('.skills', {y:"+=100%", duration: 1, stagger: 0.1, ease: Power1.easeInOut}).add(marquee(no01, 10, fromLeft), ">");
    }, []);

    return (
      <Section sectionName="section__skills">
        <div className="skills__wrapper">
          <div id="no01" className="skills__container">
            <div className="skills">A</div>
            <div className="skills">B</div>
            <div className="skills">C</div>
            <div className="skills">D</div>
            <div className="skills">E</div>
            <div className="skills">F</div>
            <div className="skills">G</div>
            <div className="skills">H</div>
            <div className="skills">I</div>
            <div className="skills">J</div>
          </div>
        </div>
      </Section>
    )
}

export default Skills;