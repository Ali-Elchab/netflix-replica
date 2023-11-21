import React from 'react'
import HeroPage from '../components/HeroPage' 
import EnjoyTv from '../components/EnjoyTv'
import SectionsSeperator from '../components/SectionsSeperator' 
import '../styles/hero-page.css'
import Download from '../components/Download'
import Stream from '../components/Stream'
import ForKids from '../components/ForKids'

const Login = () => {
  return (
    <div>
        <HeroPage />
        <SectionsSeperator/>
        <EnjoyTv />
        <SectionsSeperator/>
        <Download/>
        <SectionsSeperator/>
        <Stream />
        <SectionsSeperator/>
        <ForKids/>

        
    </div>
    
  )
}

export default Login