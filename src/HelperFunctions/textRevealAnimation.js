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
  markers,
}) => {
  gsap.from(el, {
    delay,
    stagger: 0.1,
    // duration,
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      start,
      end,
      trigger,
      endTrigger,
      // markers,
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
  markers,
}) => {
  const textRevealTl = gsap.timeline().from(el, {
    delay,
    stagger,
    // duration: 1,
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      start,
      end,
      trigger,
      endTrigger,
      markers,
    },
  });

  return textRevealTl;
};
