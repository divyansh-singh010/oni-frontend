import React from 'react'
import EventsPage from '../components/Events/Events'
import PastEvents from '../components/Events/PastEvents';

import all_events from '../data/Events/all';

export default function Events(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("Events - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const curr_events = all_events.filter(event => !event.past);
    const past_events = all_events.filter(event => event.past);

    return (
        <>
            <EventsPage events={curr_events} />
            {past_events.length > 0 ? <PastEvents events={past_events} /> : null}
        </>
    )
}
