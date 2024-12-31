import React, { useRef } from 'react';
import './Carousel.css';
import Slider from "react-slick";

export default function Carousel(props) {
    const scrollTargetRef = useRef(null); // Ref to target the scroll section

    const handleExploreClick = () => {
        if (scrollTargetRef.current) {
            scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
        }
    };

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 7500,
        arrows: false,
        pauseOnHover: false,
    };

    const images = props.images;

    return (
        <>
            <section>
                <div className="carousel">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} className="carousel_image" alt="carousel" />
                            </div>
                        ))}
                    </Slider>
                    <h3>{props.title}</h3>
                    <h1>{props.heading}</h1>
                    <button onClick={handleExploreClick}>Explore</button>
                </div>
            </section>
            <div ref={scrollTargetRef} style={{ height: '0.1vh', backgroundColor: '#f5f5f5' }}>
            </div>
        </>
    );
}
