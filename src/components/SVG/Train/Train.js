import React, { useEffect, useRef } from 'react';
// import { Circ } from 'gsap';
import scrollAnimation from '../../../HelperFunctions/scrollAnimation';

import './Train.scss';

const Train = ({ trainLights }) => {
    const trainRef = useRef(null);

    useEffect(() => {
        const greenLight = trainLights.current.querySelector('.train-lights__go');
        const redLight = trainLights.current.querySelector('.train-lights__stop');

        scrollAnimation({
            id: 'train',
            pos: 'x',
            ref: trainRef.current,
            invalidateOnRefresh: true,
            ease: "none",
            trigger: ".intro__train-lights",
            endTrigger: ".intro__train",
            start: "10px center",
            end: () => `${trainRef.current.style.width}`,
            stagger: 0.3,
            scrub: true,

            onUpdate: ({ progress, direction }) => {
                if(progress < 1 && direction){
                    greenLight.classList.remove('darken-go');
                    redLight.classList.add('darken-stop');
                }

                // let trainLightsRect = trainLights.current.getBoundingClientRect();
                // let trainRect = trainRef.current.getBoundingClientRect();

                if(progress < 1 && direction === -1){
                    greenLight.classList.add('darken-go');
                    redLight.classList.remove('darken-stop');
                }
            }
        });
    }, []);

    return (
        <svg ref={trainRef} data-speed={0.8} className="intro__train" preserveAspectRatio="xMinYMid meet" width="766" height="39" viewBox="0 0 766 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M538.72 4.86099H386.62V22.75H538.72V4.86099Z" fill="url(#paint0_radial)"/>
        <path d="M548.341 19.11L547.087 11.8523C546.535 8.58007 544.152 5.55798 540.398 3.36923C536.645 1.18049 531.787 -0.0197264 526.762 0.000245295H400C394.976 -0.0197264 390.118 1.18049 386.364 3.36923C382.611 5.55798 380.228 8.58007 379.675 11.8523L378.388 19.11L375 38.2198H551.356L548.341 19.11ZM389.872 12.5847C390.148 10.9486 391.34 9.43754 393.216 8.34317C395.093 7.2488 397.522 6.64872 400.034 6.6587H526.898C529.41 6.64872 531.839 7.2488 533.716 8.34317C535.592 9.43754 536.784 10.9486 537.06 12.5847L538.178 19.11H388.754L389.872 12.5847Z" fill="#1F1F3D"/>
        <path d="M540.244 31.5614H386.62L388.754 19.11H538.11L540.244 31.5614Z" fill="#1F1F3D"/>
        <path d="M415.109 3.44043H409.858V22.7721H415.109V3.44043Z" fill="#1F1F3D"/>
        <path d="M440.041 3.44043H434.791V22.7721H440.041V3.44043Z" fill="#1F1F3D"/>
        <path d="M464.94 3.44043H459.689V22.7721H464.94V3.44043Z" fill="#1F1F3D"/>
        <path d="M489.872 3.44043H484.621V22.7721H489.872V3.44043Z" fill="#1F1F3D"/>
        <path d="M514.77 3.44043H509.52V22.7721H514.77V3.44043Z" fill="#1F1F3D"/>
        <path d="M351.186 4.86099H199.086V22.75H351.186V4.86099Z" fill="url(#paint1_radial)"/>
        <path d="M360.807 19.11L359.553 11.8523C359.001 8.58007 356.618 5.55798 352.864 3.36923C349.111 1.18049 344.253 -0.0197264 339.228 0.000245295H212.399C207.374 -0.0197264 202.516 1.18049 198.763 3.36923C195.009 5.55798 192.626 8.58007 192.073 11.8523L190.82 19.11L187.432 38.2198H364.059L360.807 19.11ZM202.236 12.5847C202.512 10.9486 203.704 9.43754 205.581 8.34317C207.457 7.2488 209.886 6.64872 212.399 6.6587H339.33C341.842 6.64872 344.271 7.2488 346.148 8.34317C348.024 9.43754 349.216 10.9486 349.492 12.5847L350.61 19.11H201.22L202.236 12.5847Z" fill="#1F1F3D"/>
        <path d="M352.71 31.5614H199.086L201.22 19.11H350.576L352.71 31.5614Z" fill="#1F1F3D"/>
        <path d="M227.609 3.44043H222.358V22.7721H227.609V3.44043Z" fill="#1F1F3D"/>
        <path d="M252.507 3.44043H247.256V22.7721H252.507V3.44043Z" fill="#1F1F3D"/>
        <path d="M277.439 3.44043H272.189V22.7721H277.439V3.44043Z" fill="#1F1F3D"/>
        <path d="M302.338 3.44043H297.087V22.7721H302.338V3.44043Z" fill="#1F1F3D"/>
        <path d="M327.27 3.44043H322.019V22.7721H327.27V3.44043Z" fill="#1F1F3D"/>
        <path d="M163.686 4.86099H11.5853V22.75H163.686V4.86099Z" fill="url(#paint2_radial)"/>
        <path d="M173.306 19.11L172.053 11.8523C171.5 8.58007 169.117 5.55798 165.364 3.36923C161.61 1.18049 156.752 -0.0197264 151.728 0.000245295H24.9661C19.9415 -0.0197264 15.0836 1.18049 11.3301 3.36923C7.57659 5.55798 5.19356 8.58007 4.64093 11.8523L3.38754 19.11L0 38.2198H176.558L173.306 19.11ZM14.8374 12.5847C15.1137 10.9486 16.3052 9.43754 18.182 8.34317C20.0587 7.2488 22.4877 6.64872 25 6.6587H151.829C154.342 6.64872 156.771 7.2488 158.647 8.34317C160.524 9.43754 161.716 10.9486 161.992 12.5847L163.11 19.11H13.7195L14.8374 12.5847Z" fill="#1F1F3D"/>
        <path d="M165.21 31.5614H11.5853L13.7195 19.11H163.076L165.21 31.5614Z" fill="#1F1F3D"/>
        <path d="M65.0069 3.44043H59.7562V22.7721H65.0069V3.44043Z" fill="#1F1F3D"/>
        <path d="M89.9052 3.44043H84.6545V22.7721H89.9052V3.44043Z" fill="#1F1F3D"/>
        <path d="M114.838 3.44043H109.587V22.7721H114.838V3.44043Z" fill="#1F1F3D"/>
        <path d="M139.736 3.44043H134.485V22.7721H139.736V3.44043Z" fill="#1F1F3D"/>
        <path d="M751.017 19.11H573.239V3.41827L728.795 4.61675C730.556 5.2604 734.249 4.77214 735.909 5.54896C738.78 6.86832 741.386 8.41934 743.666 10.1655L752.541 17.0459L751.017 19.11Z" fill="url(#paint3_radial)"/>
        <path d="M670.157 17.0459V22.75H675.407V17.0459H670.157ZM670.157 3.41827V5.63776H675.407V3.41827H670.157ZM645.258 17.0459V22.75H650.509V17.0459H645.258ZM645.258 3.41827V5.63776H650.509V3.41827H645.258Z" fill="#1F1F3D"/>
        <path d="M753.795 38.2197H560.705L564.364 17.0458L565.549 10.1653C566.566 4.21712 575.102 0.00012207 585.468 0.00012207H712.399C720.9 0.288957 729.08 2.2196 735.909 5.54884H675.407V3.32935H670.157V5.54884H650.509V3.32935H645.258V5.54884H625.678V17.0458H645.36V22.7499H650.61V17.0458H670.258V22.7499H675.509V17.0458H752.643L763.144 25.2135C764.639 26.3698 765.594 27.7833 765.896 29.2854C766.199 30.7875 765.836 32.3149 764.85 33.6856C763.865 35.0563 762.299 36.2124 760.339 37.0163C758.379 37.8202 756.107 38.238 753.795 38.2197Z" fill="#1F1F3D"/>
        <path d="M650.509 3.41827H645.258V22.75H650.509V3.41827Z" fill="#1F1F3D"/>
        <path d="M675.407 3.41827H670.157V22.75H675.407V3.41827Z" fill="#1F1F3D"/>
        <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16268.9 8766.74) scale(6407.99 753.666)">
                <stop offset="0.14" stopColor="#F1D3CA"/>
                <stop offset="0.77" stopColor="#A7E3EB"/>
            </radialGradient>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7662.65 8766.74) scale(6407.99 753.666)">
                <stop offset="0.14" stopColor="#F1D3CA"/>
                <stop offset="0.77" stopColor="#A7E3EB"/>
            </radialGradient>
            <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-945.126 8766.74) scale(6407.99 753.666)">
                <stop offset="0.14" stopColor="#F1D3CA"/>
                <stop offset="0.77" stopColor="#A7E3EB"/>
            </radialGradient>
            <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(529.303 -0.576792) scale(220.969 144.777)">
                <stop offset="0.14" stopColor="#F1D3CA"/>
                <stop offset="0.77" stopColor="#A7E3EB"/>
                <stop offset="0.94" stopColor="#A7E3EB"/>
            </radialGradient>
        </defs>
    </svg>

    )

}

export default Train;
