import React from 'react'
import './About.css'
import ImageOverlay from '../Misc/ImageOverlay'
import GalleryImage from '../Gallery/GalleryImage'

import about_gallery_images from '../../data/about_gallery'

export default function AboutGallery() {

    const [showOverlay, setShowOverlay] = React.useState(false);
    const [currImage, setCurrImage] = React.useState(0);

    const images = about_gallery_images;

    return (
        <div className="about_gallery">
            <h3>IITD History Gallery</h3>
            <div className="about_gallery_images">
                {images.map((image, index) => {
                    return (
                        <GalleryImage key={index} image={image} index={index} setShowOverlay={setShowOverlay} setCurrImage={setCurrImage} />
                    )
                })
                }
            </div>
            {showOverlay ? <ImageOverlay images={images} currImage={currImage} setShowOverlay={setShowOverlay} /> : null}
        </div>
    )
}