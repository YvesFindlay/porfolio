import React from 'react';
import Section from '../Section';

import './About.scss';
import ScrollTrigger from 'gsap/ScrollTrigger';

console.log(ScrollTrigger)

const About = (props) => {
    return (
        <Section>
            <div className="section__about">
                <p>I Love</p>
                <p>to create immersive</p>
                <p>user interfaces</p>
            </div>
        </Section>
    )
}


export default About;