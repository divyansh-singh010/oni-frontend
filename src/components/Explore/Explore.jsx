import React from 'react'
import './Explore.css'
import UpcomingEvents from '../Events/UpcomingEvents'
import AboutIITD from '../About/AboutIITD'

import all_events from '../../data/Events/all'

export default function Explore() {
    return (
        <section>
            <AboutIITD />
            <UpcomingEvents title="Upcoming Events" events={all_events} />
        </section>
    )
}
