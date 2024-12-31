import React from 'react'
import GalleryPage from '../components/Gallery/Gallery';

export default function Gallery(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("Gallery - Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <GalleryPage />
        </>
    )
}
