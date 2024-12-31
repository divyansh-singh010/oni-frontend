import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function MobileNav(props) {

    const showMobile = props.showMobile;
    const setShowMobile = props.setShowMobile;

    React.useEffect(() => {
        if (showMobile) {
            document.querySelector('.mobile_nav_menu').style.height = '100%';
        } else {
            document.querySelector('.mobile_nav_menu').style.height = '0';
        }
    }, [showMobile])

    window.addEventListener('click', (e) => {
        if (e.target.closest('.mobile_nav_menu') === null && e.target.closest('.hamburger_icon') === null) {
            setShowMobile(false);
        }
    })

    return (
        <div className="mobile_nav_menu">
            <ul>
                <li>
                    <Link to="/about" onClick={() => setShowMobile(false)}>About</Link>
                </li>
                <li>
                    <Link to="/events" onClick={() => setShowMobile(false)}>Events</Link>
                </li>
                <li>
                    <Link to="/programs" onClick={() => setShowMobile(false)}>Programs</Link>
                </li>
                <li>
                    <Link to="#">Releases</Link>
                    <div className="dropdown_content">
                        <Link to="/releases/podcasts" onClick={() => setShowMobile(false)}>Podcast</Link>
                        <Link to="/releases/institute-contributions" onClick={() => setShowMobile(false)}>Institute Contributions</Link>
                        <Link to="/releases/tech-reviews" onClick={() => setShowMobile(false)}>Tech Reviews</Link>
                    </div>
                </li>
                <li>
                    <Link to="/team" onClick={() => setShowMobile(false)}>Team</Link>
                </li>
            </ul>
        </div>
    )
}
