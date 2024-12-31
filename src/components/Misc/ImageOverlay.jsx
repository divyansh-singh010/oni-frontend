import React from 'react'
import './Misc.css'

import Slider from "react-slick";

export default function ImageOverlay(props) {

    const images = props.images;

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: false,
        arrows: true,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 420,
                settings: {
                    arrows: false
                }
            }
        ]
    }

    return (
        <div className="image_overlay">
            <div className="image_overlay_inner">
                <Slider {...settings} initialSlide={props.currImage}>
                    {
                        images.map((image, index) => {
                            return (
                                <div key={index}>
                                    <img src={image.src} className="image_overlay_image" alt="overlay" />
                                    {image.desc ? <p>{image.desc}</p> : null}
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className="image_overlay_close" onClick={() => props.setShowOverlay(false)}>
                <p>&#x2715;</p>
            </div>
        </div>
    )
}
