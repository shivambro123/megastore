import React from 'react'
import './InnerServicecss.css'
import icon_box_free_ship from '../Images/icon_box_free_ship.png';

const InnerService = ({image,title,content}) => {
  return (
    <>
    <div className='innerservice'>
        <div className='serviceicondiv'> 
        <img
        src={image}
        alt="sevicelogo"
        /></div>
        <div className='servicecontent'>
            <h6>{title}</h6>
            <p>{content}</p>
        </div>
    </div>
    </>
  )
}

export default InnerService