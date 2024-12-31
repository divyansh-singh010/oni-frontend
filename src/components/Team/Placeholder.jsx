import React from 'react';
import "./Placeholder.css";

const Placeholder = (props) => {
    const name = props.name;
    const position = props.pos;
    const image = props.image;

    return (
        <div className="placeholder">
            <img src={image} alt="placeholder" className="placeholder-image" />
            <div className="placeholder-info">
                <div className="placeholder-name">{name}</div>
                <div className="placeholder-position">{position}</div>
            </div>
        </div>
    );
}

export default Placeholder;