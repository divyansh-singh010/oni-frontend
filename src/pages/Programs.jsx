import React from 'react'
import ProgramsCluster from '../components/Programs/Programs';

export default function Programs(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("Programs - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <ProgramsCluster />
        </>
    )
}
