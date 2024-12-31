import React from 'react'
import './Alumni.css'

export default function AlumniCard(props) {
    return (
        <div className="alumni_card">
            <img src={props.image} alt={props.name} />
            <div className="almuni_detail">
                <h4>{props.name}</h4>
                <p>{props.about}</p>
            </div>
        </div>
    )
}
