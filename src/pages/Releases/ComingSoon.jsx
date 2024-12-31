import React from 'react'
import './ComingSoon.css'
import comingsoon from '../../assets/coming-soon.svg'

export default function ComingSoon() {
    return (
        <div className="coming_soon">
            <img src={comingsoon} alt="Coming Soon" />            
        </div>
    )
}
