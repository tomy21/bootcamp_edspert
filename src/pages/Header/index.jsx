import React from 'react'
import Navbar from '../../components/navbar'; 
import HeroImages from '../../assets/images/logo_film.png'
import './header.css'

const index = () => {
  return (
    <>
        <div className="container">
        <Navbar />
        <div className="hero">
          <div className="hero-left">
            <h1>Film Terbaru Kami Sediakan</h1>
            <p>Nonton film kesukaanmu yuk di edspert film, jutaan film kami sediakan disini</p>
          </div>
          <div className="hero-right">
            <div className="circle1"></div>
            <img srcSet={HeroImages} alt="Logo Film" />
          </div>
        </div>
        </div>
    </>
  )
}


export default index