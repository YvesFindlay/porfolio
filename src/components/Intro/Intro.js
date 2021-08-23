import React from 'react';

import Moon from '../SVG/Moon/Moon';
import SingleCloud from '../SVG/SingleCloud/SingleCloud';
import DoubleCloud from '../SVG/DoubleCloud/DoubleCloud';
import TripleCloud from '../SVG/TripleCloud/TripleCloud';
import Mountains from '../SVG/Mountains/Mountains';
import Bridge from '../SVG/Bridge/Bridge';
import StarXS from '../SVG/Stars/StarXS';
import StarS from '../SVG/Stars/StarS';
import StarM from '../SVG/Stars/StarM';
import TrainLights from '../SVG/TrainLights/TrainLights';
import Train from '../SVG/Train/Train';

import './Intro.scss';

const Sky = (props) => {    

    return (
        <main className="intro">
            <Moon/>
            <StarXS />
            <StarS />
            <StarM />
            <SingleCloud size='intro__single-cloud--xxs' pos='intro__single-cloud--t16-l15' />
            <SingleCloud size='intro__single-cloud--xs' pos='intro__single-cloud--t18-l55' />
            <DoubleCloud size='intro__double-cloud--s' pos='intro__double-cloud--t20-l5'/>
            <SingleCloud size='intro__single-cloud--xs' pos='intro__single-cloud--t5-r30' />
            <SingleCloud size='intro__single-cloud--s' pos='intro__single-cloud--t20-r30' />
            <SingleCloud size='intro__single-cloud--xs' pos='intro__single-cloud--t10-r50' flip={true} />
            <SingleCloud size='intro__single-cloud--xs' pos='intro__single-cloud--t20-r2' flip={true} />
            <TripleCloud size='intro__triple-cloud--m' pos='intro__triple-cloud--t28-r18' />
            <Mountains />
            <Bridge> <Train/></Bridge>
            <TrainLights />
        </main>
    )
}
    
export default Sky;