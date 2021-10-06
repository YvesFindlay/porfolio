import React, { useEffect } from 'react';
import Section from '../Section';
import expandLineAnimation from '../../../HelperFunctions/expandLineAnimation';
import { gsap, Power1 } from 'gsap';

import './Skills.scss'

const Skills = () => {
  useEffect(() => {
    gsap.set('.skills__wrapper',{xPercent:-50,yPercent:-50})

    const boxWidth = 180;
    const totalWidth = boxWidth * 10;  //  * n of boxes
    const no01 = document.querySelectorAll("#no01 .skills__item")
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
        
        duration:time, ease:'none', repeat:-1,
      });

      return slide;
    } 
    // look into using bind method here to preset all repeating arguments

    expandLineAnimation({
      selector: ".skills .skills__wrapper::before",
      trigger: ".skills__wrapper",
      endTrigger: ".skills__wrapper",
      start: "-=100px center",
      end: "bottom center",
      transformOrigin: "left",
    })

    expandLineAnimation({
      selector: ".skills .skills__wrapper::after",
      trigger: ".skills__wrapper",
      endTrigger: ".skills__wrapper",
      start: "-=100px center",
      end: "bottom center",
      transformOrigin: "right",
      delay: 0.5,
    }).from('.skills__item', {y:"+=100%", duration: 0.6, stagger: 0.1, ease: Power1.easeInOut}).add(marquee(no01, 10, fromLeft), ">");
  }, []);

  return (
    // <Section sectionName="section__skills">
    <section className="skills">
      <div className="skills__wrapper">
        <div id="no01" className="skills__container">
          <div className="skills__item">A</div>
          <div className="skills__item">B</div>
          <div className="skills__item">C</div>
          <div className="skills__item">D</div>
          <div className="skills__item">E</div>
          <div className="skills__item">F</div>
          <div className="skills__item">G</div>
          <div className="skills__item">H</div>
          <div className="skills__item">I</div>
          <div className="skills__item">J</div>
        </div>
      </div>
    </section>
  )
}

export default Skills;