import React from "react";
import '../styles/Download.css'
import phoneImage from '../assets/images/mobile-0819.jpg'

const Download = () =>{
    return(
        <div className="download">
            
            <div className="downloadPhoneImage">
                <img src={phoneImage} alt="" className="phoneImage" />
            </div>

            <div className="downloadDescription">
                <p>Download your shows to watch offline</p>
                <p>Save your favorites easily and always have <br/> something to watch.</p>
            </div>

        </div>

    )
}

export default Download