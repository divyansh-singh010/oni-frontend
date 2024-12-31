import React from 'react'
import './Events.css'
import calendar from '../../assets/icons/calendar.svg'
import location from '../../assets/icons/location-black.svg'

export default function EventCard(props) {

    const [cardClasses, setCardClasses] = React.useState("event_card")

    React.useEffect(() => {
        if (props.past) {
            setCardClasses("event_card past_event_card")
        }
    }, [props.past])

    return (
        <div className={cardClasses}>
            <div className="event_image">
                <img src={props.image} alt="event" />
            </div>
            <div className="event_details">
                <h3>{props.title}</h3>
                <div className="event_date">
                    <img src={calendar} alt="date" />
                    <span>{props.date}</span>
                </div>
                <div className="event_venue">
                    <img src={location} alt="venue" />
                    <span>{props.venue}</span>
                </div>
            </div>
        </div>
    )
}
