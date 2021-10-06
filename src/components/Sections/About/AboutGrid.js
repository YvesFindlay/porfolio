import React, { useState, useEffect } from 'react';
import Section from '../Section';
import ScrollDown from '../../ScrollDown/ScrollDown';
import UseWindowSize from '../../../HelperFunctions/UseWindowSize';
import imgScrollAnimation from '../../../HelperFunctions/imgScrollAnimation';
import { createSplitText,  splitText } from '../../../HelperFunctions/textRevealAnimation';

import './AboutGrid.scss';

const AboutGrid = () => {
    let dimensions = UseWindowSize(600);

    // const [isMobile, setIsMobile] = useState(dimensions.isMobile);
    
    useEffect(() => {
  

        // h1 split on words

        //https://greensock.com/forums/topic/27278-text-reveal-word-by-word-instead-line-by-line/

        // const h1SplitHide = createSplitText({ 
        //     el: ".about__heading", 
        //     type: "words", 
        //     wordsClass: "split-parent" 
        // });

        // const h1Split = createSplitText({ 
        //     el: ".about__heading", 
        //     type: "words, lines", 
        //     wordsClass: "words",
        //     linesClass: "lines",
        //     position: "absolute"
        // });

        const h1Split = createSplitText({ 
            el: ".about__heading", 
            type: "lines", 
            linesClass: "split-child" 
        });

        createSplitText({ 
            el: ".about__heading", 
            type: "lines", 
            linesClass: "split-parent" 
        });

        splitText({
            el: h1Split.lines,
            // el: h1Split.words,
            stagger: 0.4,
            trigger: ".about__heading",
            endTrigger: ".about__heading",
            start: "top center",
            end: "bottom center",
        });

        const pSplit = createSplitText({ 
            el: ".about__text", 
            type: "lines", 
            linesClass: "split-child",
        });

        createSplitText({ 
            el: ".about__text", 
            type: "lines, words", 
            linesClass: "split-parent",
        });

        splitText({
            el: pSplit.lines,
            stagger: 0.4,
            trigger: ".about__text-container",
            endTrigger: ".about__text-container", // find way to select individual line classes
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
        <section className="about">
            {/* <ScrollDown /> */}
            <div className="about__header">
            <h2 className="about__heading"> I love to</h2>
              <div className="about__text-container">   
                    <p className="about__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                    <p className="about__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
             </div>
                <h2 className="about__heading">create effective</h2>
                <div className="about__text-container">   
                    <p className="about__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                    <p className="about__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta optio commodi.</p> 
                </div>
                <h2 className="about__heading">User Interfaces.</h2>
                <img src="about-img2.jpg" data-img-speed="0.4" className="about__img img1" />
            </div>
        </section>
    )
}


export default AboutGrid;