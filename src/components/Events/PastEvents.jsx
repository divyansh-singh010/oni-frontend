import React from 'react'
import './Events.css'
import EventCard from './EventCard'

export default function PastEvents(props) {

    const events = props.events;

    return (
        <div className="past_events">
            <h2>Past Events</h2>
            <div className="past_events_inner">
                {events.map((event, index) => {
                    return (
                        <EventCard title={event.title} date={event.date} venue={event.venue} image={event.image} past={event.past}  />
                    )
                })}
            </div>
        </div>
    )
}
