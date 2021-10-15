import React, { useEffect, useRef } from "react";
import scrollAnimation from "../../../HelperFunctions/scrollAnimation";

import "./Star.scss";

const Star = () => {
  const starDOM = useRef([]);
  // const [hasResized, setHasResized] = useState(false);

  const getStarAmount = () => {
    let amount,
      windowWidth = window.innerWidth;

    switch (true) {
      case windowWidth >= 0 && windowWidth <= 300:
      case windowWidth > 300 && windowWidth <= 500:
        amount = windowWidth / 2.8;
        break;
      case windowWidth > 500 && windowWidth <= 700:
        amount = windowWidth / 5;
        break;
      case windowWidth > 700 && windowWidth <= 900:
        amount = windowWidth / 5.5;
        break;
      case windowWidth > 900 && windowWidth <= 1200:
        amount = windowWidth / 5.2;
        break;
      default:
        amount = 280;
    }

    return Math.round(amount);
  };

  const randomNum = (min, max) => {
    return Math.random() * max - min + min;
  };

  let starNum = getStarAmount();

  let stars = new Array(starNum).fill(0).map((_, ind) => (
    <svg
      key={ind}
      data-speed={randomNum(0.01, 0.4)}
      ref={(element) => starDOM.current.push(element)}
      preserveAspectRatio="xMidYMid meet"
      className="intro__star"
      width="56"
      height="55"
      viewBox="0 0 56 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.533 26.726L46.121 23.624C39.312 21.113 33.945 15.746 31.435 8.937L28.332 0.527C28.216 0.21 27.914 0 27.577 0C27.24 
          0 26.938 0.21 26.822 0.526L23.72 8.935C21.209 15.744 15.841 21.112 9.03201 23.623L0.62001 26.725C0.30401 26.841 0.0940094 
          27.143 0.0940094 27.48C0.0940094 27.817 0.30401 28.119 0.62001 28.235L9.03102 31.338C15.841 33.849 21.209 39.217 23.72 46.027L26.822 
          54.437C26.938 54.753 27.24 54.963 27.577 54.963C27.914 54.963 28.216 54.753 28.332 54.437L31.435 46.026C33.946 39.216 39.313 33.849 
          46.123 31.339L54.534 28.236C54.85 28.12 55.06 27.818 55.06 27.481C55.06 27.144 54.85 26.842 54.533 26.726Z"
        fill="#F0EFEF"
      />
    </svg>
  ));

  const toDecimal = (n) => {
    return Number.parseFloat(n).toFixed(2);
  };

  const setStarSpeed = (star) => {
    let speed;
    let starWidth = toDecimal(star.style.width);
    let currentSpeed = toDecimal(star.getAttribute("data-speed"));

    switch (true) {
      case starWidth > 0.2 && starWidth <= 0.4:
      case starWidth > 0.6 && starWidth <= 0.8:
        speed = currentSpeed;
        break;
      case starWidth > 0.4 && starWidth <= 0.6:
      case starWidth > 0.8 && starWidth === 1:
        speed = -currentSpeed;
        break;
      default:
        speed = 0;
    }

    star.setAttribute("data-speed", speed);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setHasResized(true);
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     setHasResized(false);
  //   }

  // })

  useEffect(() => {
    const { current: stars } = starDOM;

    stars.forEach((star) => {
      let x = randomNum(1, 100);
      let y = randomNum(1, 100);

      if (star) {
        star.style.top = `${x}%`;
        star.style.left = `${y}%`;

        // star svg dimensions
        const randomSize = `${randomNum(0.3, 0.8)}%`;
        star.style.height = randomSize;
        star.style.width = randomSize;

        // star.style.setProperty('--star-duration', `${Math.ceil(randomNum(1, 5))}s`);
        // star.style.setProperty('--star-delay', `${Math.ceil(randomNum(1, 5))}s`);
      }

      setStarSpeed(star);

      scrollAnimation({
        pos: "y",
        ref: star,
        ease: "none",
        start: 0,
        stagger: 0.4,
        scrub: true,
      });
    });
  }, []);

  return <div className="intro__star-container">{stars}</div>;
};

export default Star;
