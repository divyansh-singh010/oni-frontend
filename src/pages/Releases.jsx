import React from 'react'
import ReleasesNavbar from '../components/ReleasesNavbar/ReleasesNavbar'
import Podcasts from './Releases/Podcasts';
import InstituteContributions from './Releases/InstituteContributions';
import TechReviews from './Releases/TechReviews';

export default function Releases(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;
    const activeItem = props.activeItem;

    return (
        <>
            <ReleasesNavbar />
            {activeItem === 0 ? <Podcasts setTitle={setTitle} setProgress={setProgress} /> : null}
            {activeItem === 1 ? <InstituteContributions setTitle={setTitle} setProgress={setProgress} /> : null}
            {activeItem === 2 ? <TechReviews setTitle={setTitle} setProgress={setProgress} /> : null}
        </>
    )
}
