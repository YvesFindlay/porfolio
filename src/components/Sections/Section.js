import React from 'react';

import './Section.scss'

const Section = (props) => (
    <section className={`${props.sectionName} card`}>{props.children}</section>
)

export default Section;