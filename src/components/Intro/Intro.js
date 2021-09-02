import React from 'react';

import Moon from '../SVG/Moon/Moon';
import Cloud from '../SVG/Cloud/Cloud';
import Mountains from '../SVG/Mountains/Mountains';
import Bridge from '../SVG/Bridge/Bridge';
import Star from '../SVG/Star/Star';
import TrainLights from '../SVG/TrainLights/TrainLights';
import Train from '../SVG/Train/Train';
import TrainSign from '../SVG/TrainSign/TrainSign';

import './Intro.scss';

const Sky = () => (
    <main className="intro">
        <Moon/>
        <Star />
        <Cloud size='intro__cloud--xs' pos='cloud1' cloudID={1} />
        <Cloud size='intro__cloud--s' pos='cloud2' cloudID={2} />
        <Cloud size='intro__cloud--m' pos='cloud3' cloudID={3} />
        <Cloud size='intro__cloud--s' pos='cloud4' cloudID={4} />
        <Cloud size='intro__cloud--xs' pos='cloud5' cloudID={5} /> 
        <Cloud size='intro__cloud--m' pos='cloud6' cloudID={6} /> 
        <Cloud size='intro__cloud--s' pos='cloud9' cloudID={9} /> 
        <Cloud size='intro__cloud--m' pos='cloud10' cloudID={10} />  
        <Mountains />
        <Bridge > 
            <Train />
        </Bridge> 
        <TrainSign />
        <TrainLights />
        <div className="intro__text">
            <p>Hi there! .., I'm</p>
            <h1>Yves</h1>
        </div>
    </main>
)

    
export default Sky;