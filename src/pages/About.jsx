import React from 'react'
import AboutFilm from '../components/About/AboutFilm'
import AboutText from '../components/About/AboutText'
import AboutTimeline from '../components/About/AboutTimeline';

export default function About(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("About IIT Delhi - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <AboutFilm />
            <AboutText />
            <AboutTimeline />
        </>
    )
}
