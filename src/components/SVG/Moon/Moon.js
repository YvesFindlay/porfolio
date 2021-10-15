import React from "react";

import "./Moon.scss";

const Moon = (props) => (
  <svg
    className="intro__moon"
    viewBox="0 0 229 228"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#Moon_svg__filter0_d)">
      <path
        d="M111.838 192c35.898 0 65-29.101 65-65 0-35.898-29.102-65-65-65-35.899 0-65 29.102-65 65 0 35.899 29.101 65 65 65z"
        fill="#E6E6E6"
      />
    </g>
    <path
      d="M113.459 98.918A7.459 7.459 0 10106 91.459a7.46 7.46 0 007.459 7.459zM123.868 163.955a7.459 7.459 0 100-14.918 7.459 7.459 0 000 14.918zM152.639 120.267a5.328 5.328 0 100-10.656 5.328 5.328 0 000 10.656zM89.05 146.098c9.415 0 17.048-7.633 17.048-17.049S98.465 112 89.049 112 72 119.633 72 129.049s7.633 17.049 17.05 17.049z"
      fill="#CBCBCB"
    />
    <defs>
      <filter
        id="Moon_svg__filter0_d"
        x={0.838}
        y={0}
        width={228}
        height={228}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={3} dy={-13} />
        <feGaussianBlur stdDeviation={24.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default Moon;
