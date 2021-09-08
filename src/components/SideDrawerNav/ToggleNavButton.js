import React, { useState , useRef } from 'react';

import { gsap } from 'gsap';

import './ToggleNavButton.scss';

// issue on mobile
// 20.875px
// 2px

const ToggleNavButton = (props) => {
    const navLine1 = useRef(null);
    const navLine2 = useRef(null);
    const navLine3 = useRef(null);
    const [wasClicked, setWasClicked] = useState(false);

    const navProps = {
        width: '50%',
        pos: 10,
        navLine1: navLine1,
        navLine2: navLine2,
        navLine3: navLine3,
    }
   
    const navHoverAnimation = (animationType) => {
        const navHoverTl = gsap.timeline({
            repeat: 0,
        });

        animationType === 'enter' && 
        navHoverTl.to(navLine1.current, {width: '100%'})
        .to(navLine3.current, {width: '100%'}, "<").duration(0.4);

        if(wasClicked) return;
        animationType === 'leave' && 
        navHoverTl.to(navLine1.current, {width: '50%'})
        .to(navLine3.current, {width: '50%'}, "<").duration(0.4);
    }

    const onNavClick = () => {
        setWasClicked(true);
        props.onClick();
        props.onAnimateNav({...navProps}); 
    }

    const onNavEnter = () => {
        setWasClicked(false);
        navProps.width = '100%'
        navHoverAnimation('enter');
    }

    const onNavLeave = () => {
        navProps.width = '50%';
        navHoverAnimation('leave');
        wasClicked && (navProps.width = '100%');
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