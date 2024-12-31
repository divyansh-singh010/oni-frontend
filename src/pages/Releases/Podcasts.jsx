import React from 'react'
// import ComingSoon from './ComingSoon';
import PodcastList from '../../components/Releases/PodcastList';

export default function Podcasts(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("Podcasts - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PodcastList />
    )
}
