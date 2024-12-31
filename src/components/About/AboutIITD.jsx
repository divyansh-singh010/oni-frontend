import React from 'react'
import './AboutIITD.css'
// import Slider from 'react-slick'
import kurur from '../../assets/kurur.jpeg'
import shilpi from '../../assets/Shilpi-Sharma.png'

export default function AboutIITD() {

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 750,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     pauseOnHover: true,
    // }

    return (
        <div className="about_iitd">
            <h2 className="about_iitd_container_heading">Message from Faculties</h2>
            <div className="about_iitd_container_new">
                <div className="about_iit_subcontainer">
                    <img src={kurur} alt="IITD" />
                    Since its formation, the Academic Outreach unit is impacting society through our diverse initiatives. From our engaging Sci-Tech seminars for high school students to the STEM Mentorship Program for young girls, we are actively shaping the next generation of innovators and leaders. By contributing to these programs, you have the opportunity to directly influence the future of science, technology, and education in the nation, and the world. Your support to these programs will help us expand these transformative efforts, inspire young minds, and create lasting change.
                    <h3 className="about_iit_subcontainer_name">- Narayan D. Kurur <br /> Dean, Academics</h3>
                </div>
                <div className="about_iitd_container_new_hr" ></div>
                <div className="about_iit_subcontainer">
                    <img src={shilpi} alt="IITD" />
                    At IIT Delhi, we strive towards bridging our academic excellence and cutting-edge research know-how, with societal challenges to give back to society. We believe in fostering a positive and sustainable impact through the engagement of diverse stakeholders.
                    We invite you to join hands in our journey to bring about a change.
                    <h3 className="about_iit_subcontainer_name">- Shilpi Sharma <br />Associate Dean, Outreach & New Initiatives </h3>
                </div>
            </div>
            <h2>About Outreach-IITD</h2>
            <div className="about_iitd_container">
                <ul className="about_iitd_text">
                    <li>Establish meaningful and impactful connections with academic peers and the broader society.</li>
                    <li>Disseminate scientific and technological advancements through structured outreach programs.</li>
                    <li>Facilitate a two-way exchange of knowledge to enhance research quality and methodologies.</li>
                    <li>Address critical societal challenges while promoting awareness of science and technology.</li>
                    <li>Inspire and nurture the next generation of innovators, researchers, and leaders.</li>
                    <li>Bridge the gap between academic excellence and societal needs through sustainable solutions.</li>
                    <li>Encourage continuous growth by actively incorporating feedback from societal and academic stakeholders.</li>
                </ul>
                <div className="about_iitd_image_carousel">
                    {/* <Slider {...settings}>
                        <div>
                            <img src={image1} alt="IITD" />
                        </div>
                        <div>
                            <img src={image2} alt="IITD" />
                        </div>
                        <div>
                            <img src={image3} alt="IITD" />
                        </div>
                        <div>
                            <img src={image4} alt="IITD" />
                        </div>
                    </Slider> */}
                    {/*eslint-disable-next-line jsx-a11y/iframe-has-title*/}
                    <iframe src="https://calendar.google.com/calendar/embed?src=80c6662d3f0369f77052850687615004ecfead681b0d515bb35efe39f58a9b37%40group.calendar.google.com&ctz=Asia%2FKolkata" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    )
}
