import React from 'react';

import './Mountains.scss';

const Mountains = () => {
  return (
    <svg preserveAspectRatio="none" className="intro__mountains" 
      viewBox="0 0 1440 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
          <path
            className="intro__mountains__mountain-1"
            d="M1473.36 765.216H-.977l247.154-66.585 400.525-58.271 293.855-249.732a9.998 9.998 0 019.925-1.767l241.678 88.799 306.74-90.812-25.54 378.368z"
            fill="#2F2E42"
          />
        <path
        className="intro__mountains__mountain-2"
          d="M1487.66 405.187c-.88-7.211-8.92-11.096-15.13-7.313l-157.68 96.17a9.983 9.983 0 01-6.32 1.399l-127.21-14.322a9.996 9.996 0 00-7.15 1.96l-132.86 100.397a9.963 9.963 0 01-5.44 2.005l-50.22 2.963a10 10 0 00-4.96 1.664L811.628 702.89a9.993 9.993 0 01-5.549 1.682H662.85c-2.395 0-4.71-.86-6.525-2.422L478.276 548.838l-151.419-98.466-120.199-70.103a10.003 10.003 0 00-6.748-1.215L76.988 400.388a10 10 0 01-7.813-1.931l-66.428-51.17c-6.575-5.065-16.103-.377-16.103 7.923v448.723c0 5.523 4.478 10 10 10H1526.79c6.01 0 10.66-5.261 9.92-11.224l-49.05-397.522z"
          fill="#454364"
        />
        <path
          className="intro__mountains__mountain-3"
          d="M1516.27 608.923c-33.1-62.273-126.47-76.521-194.05-56.351a349.566 349.566 0 01-15.05 4.136c-7.53 1.885-14.93 4.159-22.03 7.304l-104.7 46.393a100.145 100.145 0 01-25.8 7.485l-386.185 57.428a100.004 100.004 0 00-22.48 6.085l-193.207 77.404c-.988.395-2.006.713-3.043.95-23.638 5.39-19.722 40.182 4.523 40.182h316.525c6.901 0 10.199 8.483 5.109 13.144-5.089 4.661-1.792 13.145 5.11 13.145h349.558c19.36 0 24.75 26.571 6.93 34.121-17.83 7.551-12.43 34.121 6.93 34.121h294.57c58.51 0 95.96-62.321 68.49-113.991l-91.2-171.556z"
          fill="#2D2B42"
          fillOpacity={0.92}
        />
        <path
          className="intro__mountains__mountain-4"
          d="M-26.766 572.979l186.484-40.989 131.78 19.348 135.21 62.965 115.102-24.561 105.248 31.816 84.776-7.255 169.514 70.22 118.682-29.064 144.07 36.319 161.05-70.22 84.78-4.837 88.97-55.688V900H1.955l-28.72-327.021z"
          fill="#4F4C70"
        />
      <defs>
        <clipPath id="Mountains_svg__clip0">
          <path fill="#fff" d="M0 0h1440v900H0z" />
        </clipPath>
        <filter
          id="Mountains_svg__filter0_d"
          x={-16.977}
          y={374.848}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={8} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Mountains;