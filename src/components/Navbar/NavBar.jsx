import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import hamburger from '../../assets/icons/hamburger.svg'
import close from '../../assets/icons/close-red.svg'
import MobileNav from './MobileNav'
import logo_outreach from '../../assets/Frame 30.svg'

export default function NavBar() {

    const [showMobile, setShowMobile] = React.useState(false);

    return (
        <header>
            <nav>
                <div className="main_navbar">
                    <div className="navbar_logo">
                        <Link to="/">
                            <img src={logo_outreach} alt="logo" />
                        </Link>
                    </div>
                    <ul className="navbar_items">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/programs">Programs</Link>
                        </li>
                        <li>
                            <Link to="/releases">Releases</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                    </ul>
                    <div className="hamburger_icon" onClick={() => setShowMobile(!showMobile)}>
                        {showMobile ? <img src={close} alt="Menu" /> : <img src={hamburger} alt="Menu" />}
                    </div>
                </div>
                <MobileNav showMobile={showMobile} setShowMobile={setShowMobile} />
            </nav>
        </header>
    )
}
