import React from 'react'
import './About.css'
import film from '../../assets/Film.mp4'
import fullscreen from '../../assets/icons/fullscreen.svg'

export default function AboutFilm() {

    function paused () {
        var bg_video = document.querySelector('.background_video');
        bg_video.pause();
    }

    function played () {
        var main_video = document.querySelector('.main_video');
        var bg_video = document.querySelector('.background_video');
        bg_video.currentTime = main_video.currentTime;
        bg_video.play();
    }

    function toggleFullscreen () {
        var main_video = document.querySelector('.main_video');
        if (main_video.requestFullscreen) {
            main_video.requestFullscreen();
        } else if (main_video.webkitRequestFullscreen) { /* Safari */
            main_video.webkitRequestFullscreen();
        } else if (main_video.msRequestFullscreen) { /* IE11 */
            main_video.msRequestFullscreen();
        }
        main_video.muted = false;
    }

    return (
        <div className="about_film">
            <video autoPlay loop muted className="background_video">
                <source src={film} type="video/mp4" />
            </video>
            <video autoPlay loop muted className="main_video" onPause={paused} onPlay={played}>
                <source src={film} type="video/mp4" />
            </video>
            <div className="fullscreen" onClick={toggleFullscreen}>
                <img src={fullscreen} alt="fullscreen" />
            </div>
        </div>
    )
}
