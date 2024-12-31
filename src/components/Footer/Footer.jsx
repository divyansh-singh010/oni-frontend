import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/logo_white.svg'
import location from '../../assets/icons/location.svg'
import call from '../../assets/icons/call.svg'
import facebook from '../../assets/icons/facebook.svg'
import x from '../../assets/icons/x.svg'
import instagram from '../../assets/icons/instagram.svg'

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer">
                <div className="footer_logo">
                    <Link to="/">
                        <img src={logo} alt="Academic Outreach and New Initiatives | IIT Delhi" />
                    </Link>
                    <div className="footer_social">
                        <Link to="https://www.facebook.com/academicoutreachiitd" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="Facebook" />
                        </Link>
                        <Link to="https://www.instagram.com/academicoutreachiitd/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="Instagram" />
                        </Link>
                        <Link to="https://www.iitd.ac.in/" target="_blank" rel="noreferrer">
                            <img src={x} alt="IIT Delhi" />
                        </Link>
                    </div>
                </div>
                <div className="footer_navs">
                    <div className="footer_links">
                        <h4>Navigation</h4>
                        <Link to="/">Home</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/programs">Programs</Link>
                        <Link to="/releases">Releases</Link>
                        <Link to="/about">About Us</Link>
                    </div>
                    <div className="footer_links">
                        <h4>Useful Links</h4>
                        <Link target='_blank' to="https://home.iitd.ac.in/about.php">About the Institute</Link>
                        <Link target='_blank' to="https://home.iitd.ac.in/administration.php">Administration</Link>
                        <Link target='_blank' to="https://timetable.iitd.ac.in/calendar">Academic Calendar</Link>
                        <Link target='_blank' to="https://home.iitd.ac.in/pg-admissions.php">PhD/PG Admissions</Link>
                    </div>
                    <div className="footer_links">
                        <h4>Contact Us</h4>
                        <div className="contact_link">
                            <img src={location} alt="Location" />
                            <p>Office of Dean Academics, LHC Building 3rd Floor, Indian Institute of Technology Delhi, New Delhi - 110016, India</p>
                        </div>
                        <div className="contact_link">
                            <img src={call} alt="Call" />
                            <p>New Delhi: <Link to="tel:+91-11-2654 8720">+91-11-2654 8720</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bar">
                <p>© Copyright {year} : <span>Academic Outreach and New Initiatives, IIT Delhi</span></p>
            </div>
        </footer>
    )
}
