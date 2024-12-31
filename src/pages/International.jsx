import React from 'react'
import Carousel from '../components/Carousel/Carousel'

// import abu_dhabi_data from '../data/Programs/abu-dhabi';
// import ProgramRenderer from '../components/Programs/ProgramRenderer';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import abu_dhabi_events from '../data/Events/abu_dhabi';

import image1 from '../assets/internation-carousel-1.jpeg'
import image2 from '../assets/internation-carousel-2.jpeg'

export default function International(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("International Outreach - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Carousel images={[image1, image2]} title="Follow your dream" heading="@ IIT Delhi" />
            <UpcomingEvents title="Abu Dhabi Events" events={abu_dhabi_events} />
        </>
    )
}
