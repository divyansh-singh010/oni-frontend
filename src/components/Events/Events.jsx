import React from 'react'
import './Events.css'
import EventCard from './EventCard'

export default function EventsPage(props) {

    const events = props.events;

    return (
        <div className="events">
            {events.map((event, index) => {
                return (
                    <EventCard title={event.title} date={event.date} venue={event.venue} image={event.image} past={event.past}  />
                )
            })}
        </div>
    )
}
