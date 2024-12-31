import React from 'react'
import Team from '../components/Team/Team';

export default function Home(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("Team - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Team />
        </>
    )
}
