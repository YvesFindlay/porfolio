import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const createSplitText = ({ el, type, linesClass, wordsClass }) => {
  return new SplitText(el, {
    type,
    linesClass,
    wordsClass,
  });
};

export const splitText = ({
  el,
  duration,
  trigger,
  endTrigger,
  start,
  end,
  delay,
}) => {
  gsap.from(el, {
    delay,
    stagger: 0.1,
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      start,
      end,
      trigger,
      endTrigger,
    },
  });
};

export const splitTextTimeline = ({
  el,
  stagger,
  trigger,
  endTrigger,
  start,
  end,
  delay,
}) => {
  const textRevealTl = gsap.timeline().from(el, {
    delay,
    stagger,
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      start,
      end,
      trigger,
      endTrigger,
    },
  });

  return textRevealTl;
};
