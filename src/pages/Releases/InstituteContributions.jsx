import React from 'react'
import ComingSoon from './ComingSoon';

export default function InstituteContributions(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("Institute Contributions - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ComingSoon />
    )
}
