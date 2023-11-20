import React from 'react'
import HeroPage from '../components/HeroPage' 
import EnjoyTv from '../components/EnjoyTv'
import SectionsSeperator from '../components/SectionsSeperator' 
import '../styles/hero-page.css'
import Download from '../components/Download'
// import Header from '../components/header'
const Login = () => {
  return (
    <div>
        <HeroPage />
        <SectionsSeperator/>
        <EnjoyTv />
        <SectionsSeperator/>
        <Download/>
        <SectionsSeperator/>
        
    </div>
    
  )
}

export default Login