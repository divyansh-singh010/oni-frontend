import React from 'react'
import './Gallery.css'
import expand from '../../assets/icons/expand.svg'

export default function GalleryImage(props) {
    return (
        <div className="gallery_image">
            <img src={props.image.src} alt="Gallery" />
            <div className="gallery_image_expand_btn" onClick={() => { props.overlayVal ? props.setShowOverlay(props.overlayVal) : props.setShowOverlay(true); props.setCurrImage(props.index); }}>
                <img src={expand} alt="expand" />
            </div>
        </div>
    )
}
