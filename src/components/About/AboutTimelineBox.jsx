import React from 'react'
import './About.css'

export default function AboutTimelineBox(props) {
    return (
        <div className="timeline_box">
            <img src={props.image} alt="halo" width="75%" height="75%" />
            <h4>{props.year}</h4>
            {props.text.map((text, index) => {
                return <p key={index}>{text}</p>
            })}
            {props.index % 2 === 1 ? <div className="timeline_connector timeline_connector_left">
                <div className="connector_circle"></div>
                <div className="connector_line"></div>
                <div className="connector_circle"></div>
            </div> : <div className="timeline_connector timeline_connector_right">
                <div className="connector_circle"></div>
                <div className="connector_line"></div>
                <div className="connector_circle"></div>
            </div>}
        </div>
    )
}
