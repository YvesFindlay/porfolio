import React, {useEffect, useRef} from 'react';

import './Star.scss';

const Star = () => {

  const amount = 250;
  const starDOM = useRef([]);

  const stars = new Array(amount).fill(0).map((_, ind) => (
    <svg key={ind} ref={(element) => starDOM.current.push(element)} preserveAspectRatio="xMidYMid meet" className='intro__star' width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.533 26.726L46.121 23.624C39.312 21.113 33.945 15.746 31.435 8.937L28.332 0.527C28.216 0.21 27.914 0 27.577 0C27.24 
          0 26.938 0.21 26.822 0.526L23.72 8.935C21.209 15.744 15.841 21.112 9.03201 23.623L0.62001 26.725C0.30401 26.841 0.0940094 
          27.143 0.0940094 27.48C0.0940094 27.817 0.30401 28.119 0.62001 28.235L9.03102 31.338C15.841 33.849 21.209 39.217 23.72 46.027L26.822 
          54.437C26.938 54.753 27.24 54.963 27.577 54.963C27.914 54.963 28.216 54.753 28.332 54.437L31.435 46.026C33.946 39.216 39.313 33.849 
          46.123 31.339L54.534 28.236C54.85 28.12 55.06 27.818 55.06 27.481C55.06 27.144 54.85 26.842 54.533 26.726Z" fill="#F0EFEF"/>
    </svg>
  ));

  const randomNum = (min, max) => {
    return Math.random() * max - min + min;
  }

  useEffect(() => {
   const {current: stars } = starDOM;
    stars.forEach((star) => {
      
      // Star coordinates
      let x = randomNum(1, 100);
      let y = randomNum(1, 100);

      star.style.top = `${x}%`;
      star.style.left = `${y}%`;

      // star svg dimensions
      const randomSize = `${randomNum(0.3, 0.7)}%`; 
      star.style.height = randomSize;
      star.style.width = randomSize;

      star.style.setProperty('--star-duration', `${Math.ceil(randomNum(1, 5))}s`);
      star.style.setProperty('--star-delay', `${Math.ceil(randomNum(1, 5))}s`);
    })
    
    return () => {}
  }, []);

  return (
    <div className="intro__star-container">
      {stars} 
    </div>
  );
}

export default Star;