import React, { useState, useEffect } from 'react';
import Section from '../Section';
import ScrollDown from '../../ScrollDown/ScrollDown';
import UseWindowSize from '../../../HelperFunctions/UseWindowSize';
import imgScrollAnimation from '../../../HelperFunctions/ImgScrollAnimation';

import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

import './AboutGrid.scss';

const AboutGrid = () => {
    let dimensions = UseWindowSize(600);

    // const [isMobile, setIsMobile] = useState(dimensions.isMobile);
    
    useEffect(() => {
        gsap.registerPlugin(SplitText);

        const createSplitText = (el, type, linesClass) => {
            return new SplitText(el, {
                type,
                linesClass,
            });
        }

        const splitText = ({el, stagger, trigger, endTrigger, start, end }) => {
            // If el is an array
        //     let textContent = !el?.length ? el :

        //    [...textContent].forEach((text) => {
                // need to pass all elements to array
                gsap.from(el, {
                    duration: 1,
                    yPercent: 100,
                    ease: "power4",
                    stagger,
                    scrollTrigger: {
                        start,
                        end,
                        trigger,
                        endTrigger,
                    }
                });
            // })
        };

        const h1ChildSplit = createSplitText(".about__heading", "lines", "split-child",);
        createSplitText(".about__heading", "lines", "split-parent");

        splitText({
            el: h1ChildSplit.lines,
            stagger: 0.2,
            trigger: ".about__heading",
            endTrigger: ".about__heading",
            start: "top center",
            end: "bottom center",
        });

        const pChildSplit = createSplitText(".about__text", "lines", "split-child");
        createSplitText(".about__text", "lines", "split-parent");

        splitText({
            el: pChildSplit.lines,
            stagger: 0.3,
            trigger: ".about__text",
            endTrigger: ".about__text", // find way to select individual line classes
            start: "top center",
            end: "bottom center",
        });

        imgScrollAnimation({
            delay: 0.4,
            trigger: ".about__header",
            endTrigger: ".section__about",
            star: "top center",
            end: "bottom+=300px center",
        })

    }, []);

    // ANSWER - WRAP EACH TEXT IN ITS OWN WRAPPER  DIV, THEN USE DIV AS START AND END TRIGGER, OR USE numbered heading classes e.g. heading1, heading2 etc

    return (
        <Section>
            {/* <ScrollDown /> */}
            <div className="section__about">
                <div className="about__header">
                    <h2 className="about__heading"> I Love to</h2>
                    <p className="about__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                    <h2 className="about__heading">create effective</h2>
                    <p className="about__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                    <h2 className="about__heading">User Interfaces.</h2>
                    <p className="about__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                    <img src="about-img2.jpg" data-img-speed="0.4" className="about__img img1" />
                </div>
             
            </div>
        </Section>
    )
}


export default AboutGrid;