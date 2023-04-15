import React from 'react'
import './DisPostercss.css'

const DisPoster = () => {
  return (
    <>
    <div className='container postwrap'>
    <div className='posterwrapper '>
        <div className='InnerPoster imag1'>
            <div className='innercontent'>
            <h2>Relaxed fit</h2>
            <h2>Overshirt</h2>
            <button>DISCOUNT 20%</button>
            </div>
        </div>
        <div className='InnerPoster imag2'>
        <div className='innercontent sec'>
            <h2>DISCOUNT 20%</h2>
            <h2>All Items</h2>
            <p><span>100% leather <br/>handmade</span></p>
            </div>
        </div>  
        <div className='InnerPoster imag3'>
        <div className='innercontent'>
            <h2>GET 20% OFF</h2>
            <h2>In App</h2>
            <button>DOWNLOAD NOW</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default DisPoster