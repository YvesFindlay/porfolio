import React from 'react';

import Section from '../Section';
import ScrollDown from '../../ScrollDown/ScrollDown';

import './AboutGrid.scss';

const AboutGrid = () => {

    return (
        <Section>
            <ScrollDown />
            <div className="section__about">
                <div className="about__header">
                    <h2 className="about__heading">I Love</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                    <h2 className="about__heading">to create immersive</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                    <h2 className="about__heading">user interfaces.</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                </div>
            </div>
        </Section>
    )
}


export default AboutGrid;