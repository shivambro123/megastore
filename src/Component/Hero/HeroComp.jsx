import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeroCompcss.css'
const HeroComp = () => {
  return (
    <>
    
    <div className='hero-wrapper'>
        <div className='container content_wrapper'>
        <div className='cat_list'></div>
        <div className='hero_content'><h2>The Purl Knit<br/>Cardigan</h2>
        <p>Here is your chance to upgrade your wardrobe with a variation.</p>
        <button><NavLink to="/product" className="nav-link">SHOP THE LOOK</NavLink></button></div>
    </div>
    </div>
    </>
  )
}

export default HeroComp