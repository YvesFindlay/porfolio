import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Power1 } from 'gsap/';


 const ImgScrollAnimation = ({ trigger, endTrigger, start, end, markers, stagger, delay }) => {

  gsap.utils.toArray('[data-img-speed]').forEach((img) => {
    gsap.to(img, {
        y: (_, target) => -ScrollTrigger.maxScroll(window) * target.dataset.imgSpeed / 2,
        ease: Power1,
        delay,
        stagger,
        scrollTrigger: {
        trigger,
        endTrigger,
        start,
        end,
        scrub: 1,
        markers,
        }, 
    });
  });
}

export default ImgScrollAnimation;


