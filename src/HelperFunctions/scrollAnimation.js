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
  scrub,
  onUpdate,
  delay,
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
    delay,
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
