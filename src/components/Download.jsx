import React from "react";
import '../styles/Download.css'
import phoneImage from '../assets/images/mobile-0819.jpg'
import boxShot from '../assets/images/boxshot.png'
import downloadIcon from '../assets/images/download-icon.gif'

const Download = () =>{
    return(
        <div className="download">
            
            <div className="downloadPhoneImage">
                <div className="containerOnPhone">
                    <img src={boxShot} alt="" className="margin"/>
                    <div className="flex">
                        <p>Stranger Things</p> 
                        <p>Downloading...</p>
                    </div> 
                    <img src={downloadIcon} alt="" className="downloadIcon"/>
                </div>
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