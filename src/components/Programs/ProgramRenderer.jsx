import React from 'react'
import './ProgramRenderer.css'
import ImageOverlay from '../Misc/ImageOverlay'
import GalleryImage from '../Gallery/GalleryImage';

export default function ProgramRenderer(props) {

    const data = props.data;

    const [showOverlay, setShowOverlay] = React.useState(false);
    const [currImage, setCurrImage] = React.useState(0);

    return (
        <div className="program">
            <h1>{data.title}</h1>
            <p className="program_desc">{data.description}</p>
            {data.content.map((content, key_1) => {
                return (
                    <>
                        <h2>{content.primaryHeading}</h2>
                        {content.subContent.map((subContent, key_2) => {
                            return (
                                <>
                                    <h3>{subContent.secondaryHeading}</h3>
                                    <p className="program_desc">{subContent.description}</p>
                                    <div className="content_gallery">
                                        {subContent.images.map((image, key_3) => {
                                            return (
                                                <GalleryImage key={key_3} image={image} index={key_3} overlayVal={(key_1 + 1)*10 + key_2 + 1} setShowOverlay={setShowOverlay} setCurrImage={setCurrImage} />
                                            )
                                        })}
                                        {showOverlay === (key_1 + 1)*10 + key_2 + 1 ? <ImageOverlay images={subContent.images} currImage={currImage} setShowOverlay={setShowOverlay} /> : null}
                                    </div>
                                    <hr />
                                </>
                            )
                        })}
                    </>
                )
            })}
        </div>
    )
}
