import React from 'react'
import './About.css'
import AboutTimelineBox from './AboutTimelineBox'

import timeline_data from '../../data/about_timeline'

export default function AboutTimeline() {

    return (
        <div className="about_timeline">
            <div className="timeline_line"></div>
            {timeline_data.map((data, index) => {
                return <AboutTimelineBox key={index} index={index} year={data.year} text={data.text} image={data.image} />
            })}
        </div>
    )
}
