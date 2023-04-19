import React from 'react'
import './Servicescss.css'
import InnerService from './InnerService';
import icon_box_free_ship from '../Images/icon_box_free_ship.png';
import icon_box_money_guarantee from '../Images/icon_box_money_guarantee.png';
import icon_box_payment from '../Images/icon_box_payment.png';
import icon_box_support from '../Images/icon_box_support.png';



const Services = () => {
  return (
    <>
    <div className='servicewrapper container'>
        <InnerService image={icon_box_free_ship} title="Free Shipping" content="Free Shipping for orders over Rs.600" />
        <InnerService image={icon_box_money_guarantee} title="Money Guarantee" content="Within 30 days for an exchange."/>
        <InnerService image={icon_box_payment} title="Online Support" content="24 hours a day, 7 days a week"/>
        <InnerService image={icon_box_support} title="Flexible Payment" content="Pay with Multiple Credit Cards"/>

    </div>
    </>
  )
}

export default Services