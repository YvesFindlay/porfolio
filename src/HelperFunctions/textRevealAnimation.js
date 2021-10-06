import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const createSplitText = ({ el, type, linesClass, wordsClass, position }) => {
    return new SplitText(el, {
        type,
        linesClass,
        wordsClass,
        position
    });
}

export const splitText = ({el, stagger, trigger, endTrigger, start, end }) => {
    // If el is an array
//     let textContent = !el?.length ? el :

//    [...textContent].forEach((text) => {
        // need to pass all elements to array

    // gsap.utils.toArray(".line").forEach((line) => {
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
    // });
};

