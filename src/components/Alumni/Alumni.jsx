import React from 'react'
import './Alumni.css'

import Slider from 'react-slick'
import AlumniCard from './AlumniCard'

import deepinder from '../../assets/alumni/deepinder-goyal.jpg'
import jayant from '../../assets/alumni/jayant-sinha.jpeg'
import raghuram from '../../assets/alumni/raghuram-rajan.jpg'
import padmasree from '../../assets/alumni/padmasree-warrior.png'
import chetan from '../../assets/alumni/chetan-bhagat.jpg'
import sachin from '../../assets/alumni/sachin-bansal.jpg'
import binny from '../../assets/alumni/binny-bansal.jpg'
import kiran from '../../assets/alumni/kiran-bedi.png'
import soumitra from '../../assets/alumni/soumitra-dutta.jpg'
import vinod from '../../assets/alumni/vinod-khosla.jpg'

export default function Alumni() {

    const settings =  {
        dots: false,
        infinite: true,
        speed: 750,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className="distinguished_alumni">
            <h3>Distinguished IIT Delhi Alumni</h3>
            <div className="alumni_carousel">
                <Slider {...settings}>
                    <div>
                        <AlumniCard name="Mr. Deepinder Goyal" image={deepinder} about="Founder, Zomato" />
                    </div>
                    <div>
                        <AlumniCard name="Mr. Jayant Sinha" image={jayant} about="Indian Politician and Member of Parliament" />
                    </div>
                    <div>
                        <AlumniCard name="Prof. Raghuram Rajan" image={raghuram} about="Former Governer of the Reserve Bank of India and Chief Economist of IMF, Distinguished Professor at the University of Chicago's Booth School of Business" />
                    </div>
                    <div>
                        <AlumniCard name="Ms. Padmasree Warrior" image={padmasree} about="Businesswoman and Technology Executive, Former CTO of Motorola" />
                    </div>
                    <div>
                        <AlumniCard name="Mr. Chetan Bhagat" image={chetan} about="Author, Columnist, and YouTuber" />
                    </div>
                    <div>
                        <AlumniCard name="Mr. Sachin Bansal" image={sachin} about="Co-Founder, Flipkart" />
                    </div>
                    <div>
                        <AlumniCard name="Mr. Binny Bansal" image={binny} about="Co-Founder, Flipkart" />
                    </div>
                    <div>
                        <AlumniCard name="Dr. Kiran Bedi" image={kiran} about="Former IPS Officer and Lt. Governer of Puducherry" />
                    </div>
                    <div>
                        <AlumniCard name="Prof. Soumitra Dutta" image={soumitra} about="Dean, Saïd Business School at the University of Oxford" />
                    </div>
                    <div>
                        <AlumniCard name="Mr. Vinod Khosla" image={vinod} about="Co-Founder of Sun Microsystems, Entrepreneur, Investor, and Technologist" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
