import React from 'react';

import Moon from '../SVG/Moon';
import SingleCloud from '../SVG/SingleCloud';
import DoubleCloud from '../SVG/DoubleCloud';
import TripleCloud from '../SVG/TripleCloud';

import './Intro.scss';

const Sky = () => (
    <main className="intro">
        <Moon/>
        <SingleCloud size='intro__single-cloud--s' pos='intro__single-cloud--t18-l60' />
        <SingleCloud size='intro__single-cloud--xxs' pos='intro__single-cloud--t16-l15' />
        <DoubleCloud size='intro__double-cloud--s' pos='intro__double-cloud--t20-l5'/>
        <SingleCloud size='intro__single-cloud--xs' pos='intro__single-cloud--t5-r30' />
        <SingleCloud size='intro__single-cloud--xs' pos='intro__single-cloud--t10-r50' flip={true} />
        <SingleCloud size='intro__single-cloud--xs' pos='intro__single-cloud--t20-r2' flip={true} />
        <TripleCloud size='intro__triple-cloud--m' pos='intro__triple-cloud--t28-r18' />
    </main>
)

export default Sky;