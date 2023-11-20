import React from 'react'
import HeroPage from '../components/HeroPage' 
import EnjoyTv from '../components/EnjoyTv'
import SectionsSeperator from '../components/SectionsSeperator' 
import '../styles/HeroPage.css'
// import Header from '../components/header'
const Login = () => {
  return (
    <div>
        <HeroPage />
        <SectionsSeperator/>
        <EnjoyTv />
        
    </div>
    
  )
}

export default Login