import React from 'react'
import {Link } from 'react-router-dom';
import '../styles/EnjoyTv.css'
import tv from '../assets/images/tv.png'

const EnjoyTv = () => {

    return(
        <div className="enjoyTv">
            <div className="enjoyTvDescription">
                <p>Enjoy on your TV</p>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast,<br/>Apple TV, Blu-ray players, and more.</p>
            </div>

            <div className="enjoyTvImage">
                <img src={tv} alt="" className="tvImage" />
            </div>
        </div>
    )
}

export default EnjoyTv