import React from 'react';
import { gsap } from 'gsap';

import './Backdrop.scss';

const Backdrop = ({nav, onClickBackdrop}) => {

    const {navLine1, navLine2, navLine3} = nav;

    const BackdropCallbackHandler = () => {

        const navReverseTl = gsap.timeline({
            repeat: 0,
        });

        navReverseTl.to(navLine3.current, {rotate: 0, transformOrigin: 'center'}, 0.05)
        .to(navLine1.current, {rotate: 0, transformOrigin: 'center'},"<")
        .to(navLine2.current, {opacity: 1}, 0.5)
        .to(navLine3.current, {y: 0}, )
        .to(navLine1.current, {y: 0}, "<")
        .to(navLine1.current, {width: '50%'})
        .to(navLine3.current, {width: '50%'}, "<").totalDuration(0.8);     
        
        onClickBackdrop();
    }

    return (
        <div className="backdrop" onClick={BackdropCallbackHandler} />
    )
}

export default Backdrop;
