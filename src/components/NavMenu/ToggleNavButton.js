import React, { useRef } from 'react';

import { gsap } from 'gsap';

import './ToggleNavButton.scss';

const ToggleNavButton = (props) => {
    const navLine1 = useRef(null);
    const navLine2 = useRef(null);
    const navLine3 = useRef(null);

    const calculatePosition = (height) => {
        return height / 2 - (height / 20);
    }

    const navProps = {
        width: '50%',
        pos: calculatePosition(2),
        navLine1,
        navLine2,
        navLine3
    }
   
    const navHoverAnimation = (animationType) => {
        const navHoverTl = gsap.timeline({
            repeat: 0,
        });

        animationType === 'enter' && 
        navHoverTl.to(navLine1.current, {width: '100%'})
        .to(navLine3.current, {width: '100%'}, "<").duration(0.3);

      
        animationType === 'leave' && 
        navHoverTl.to(navLine1.current, {width: '50%'})
        .to(navLine3.current, {width: '50%'}, "<").duration(0.3);
    }

    const onNavClick = () => {
        props.onClick();
        props.onAnimateNav(navProps); 
    }

    const onNavEnter = () => {
        if(props.wasClicked) return;
        navHoverAnimation('enter');
    }

    const onNavLeave = () => {
        if(props.wasClicked) return;
        navHoverAnimation('leave');
    }

    return(
        <button
            onClick={onNavClick} 
            onMouseEnter={onNavEnter} 
            onMouseLeave={onNavLeave} 
            className="toggle-button">
            <div ref={navLine1} className="toggle-button__line line-1" />
            <div ref={navLine2} className="toggle-button__line line-2" />
            <div ref={navLine3} className="toggle-button__line line-3" />
        </button>
    )
}

export default ToggleNavButton;
