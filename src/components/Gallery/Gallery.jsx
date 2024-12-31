import React from 'react'
import './Gallery.css'
import ImageOverlay from '../Misc/ImageOverlay'
import GalleryImage from './GalleryImage'

import gallery_images from '../../data/gallery'

export default function GalleryPage() {

    const [showOverlay, setShowOverlay] = React.useState(false);
    const [currImage, setCurrImage] = React.useState(0);

    const images = gallery_images;

    return (
        <div className="gallery">
            {images.map((image, index) => {
                return (
                    <GalleryImage key={index} image={image} index={index} setShowOverlay={setShowOverlay} setCurrImage={setCurrImage} />
                )
            })}
            {showOverlay ? <ImageOverlay images={images} currImage={currImage} setShowOverlay={setShowOverlay} /> : null}
        </div>
    )
}
