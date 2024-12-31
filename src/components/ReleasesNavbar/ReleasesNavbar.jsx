import React from 'react'
import { NavLink } from 'react-router-dom'
import './ReleasesNavbar.css'

export default function ReleasesNavbar() {

    return (
        <div className="releases_navbar">
            <ul>
                <NavLink to="/releases/podcasts" className={({ isActive }) => isActive ? "releases_navbar_link releases_navbar_active" : "releases_navbar_link"}>
                    <li>
                        Podcasts
                    </li>
                </NavLink>
                <NavLink to="/releases/institute-contributions" className={({ isActive }) => isActive ? "releases_navbar_link releases_navbar_active" : "releases_navbar_link"}>
                    <li>
                        Institute Contributions
                    </li>
                </NavLink>
                <NavLink to="/releases/tech-reviews" className={({ isActive }) => isActive ? "releases_navbar_link releases_navbar_active" : "releases_navbar_link"}>
                    <li>
                        Tech Reviews
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}
