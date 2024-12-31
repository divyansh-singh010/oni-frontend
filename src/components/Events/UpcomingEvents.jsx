import React from 'react'
import './Events.css'
import Slider from 'react-slick'
import left from '../../assets/icons/left_arrow_red.svg'
import right from '../../assets/icons/right_arrow_red.svg'
import EventCard from './EventCard'

export default function UpcomingEvents(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        prevArrow: <img src={left} alt="prev" />,
        nextArrow: <img src={right} alt="next" />,

        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "20px",
                    arrows: false,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "150px",
                    arrows: false,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "100px",
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "80px",
                    arrows: false,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: "2px",
                    arrows: false,
                },
            },
        ]
    }

    const events = props.events;

    return (
        <div className="upcoming_events">
            <h2>{props.title}</h2>
            <div className="upcomings_events_slider">
                <Slider {...settings}>
                    {events.map((event, index) => {
                        return (
                            <div>
                                <EventCard title={event.title} date={event.date} venue={event.venue} image={event.image} past={event.past}  />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
