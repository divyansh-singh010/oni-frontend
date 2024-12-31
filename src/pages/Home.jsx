import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Explore from '../components/Explore/Explore'
import image1 from '../assets/home-carousel.jpeg'
import image2 from '../assets/programs/academic_visits/image1.png'
import image3 from '../assets/programs/academic_visits/image3.png'
import image4 from '../assets/abu-dhabi/2.png'
export default function Home(props) {

    const setTitle = props.setTitle;
    const setProgress = props.setProgress;

    React.useEffect(() => {
        setTitle("Academic Outreach and New Initiatives | IIT Delhi")
        setProgress(100);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Carousel images={[image1, image2, image3, image4]} title="Welcome to" heading="Outreach@IITD" />
            <Explore />
        </>
    )
}
