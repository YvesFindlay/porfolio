import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollAnimation = ({
  pos,
  ref,
  ease,
  start,
  end,
  trigger,
  endTrigger,
  stagger,
  scrub,
  onUpdate,
}) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.config({
    nullTargetWarn: false,
  });

  gsap.to(ref, {
    [pos]: (_, el) =>
      parseFloat(el.getAttribute("data-speed")) *
      ScrollTrigger.maxScroll(window),
    ease,
    stagger,
    scrollTrigger: {
      start,
      trigger,
      endTrigger,
      end,
      scrub,
      onUpdate,
    },
  });
};

export default scrollAnimation;
