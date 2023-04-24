import React from 'react';
import './Footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='footerwrapper'>
        <div className='footerdiv container'>
            <div className='footermain'>
            <div className='footer'>    
                <ul>
                <li><Link className='nav-link'>FIND IT FAST</Link></li>
                <li><Link className='nav-link'>About Us</Link></li>
                <li><Link className='nav-link'>Privacy Policy</Link></li>
                <li><Link className='nav-link'>Terms and Conditions</Link></li>
                <li><Link className='nav-link'>Testimonals</Link></li>
                <li><Link className='nav-link'>Top Searches</Link></li>

                </ul>
            </div>
            <div className='footer'>
                <ul>
                <li><Link className='nav-link'>CUSTOMER CARE</Link></li>
                <li><Link className='nav-link'>My Account</Link></li>
                <li><Link className='nav-link'>Login</Link></li>
                <li><Link className='nav-link'>Terms and Conditions</Link></li>
                <li><Link className='nav-link'>Testimonals</Link></li>
                <li><Link className='nav-link'>Top Searches</Link></li>

                </ul>
            </div>
            <div className='footer'>
                <ul>
                <li><Link className='nav-link'>OTHER BUSINESS</Link></li>
                <li><Link className='nav-link'>Partnership Programs</Link></li>
                <li><Link className='nav-link'>Associate Program</Link></li>
                <li><Link className='nav-link'>Wholesale Socks</Link></li>
                <li><Link className='nav-link'>Wholesale Funny Socks</Link></li>
                <li><Link className='nav-link'>Delivery Information</Link></li>

                </ul>   
            </div>
            <div className='footerlast'>
                <ul>
                <li><Link className='nav-link'>NEWS LETTER</Link></li>

                </ul>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer