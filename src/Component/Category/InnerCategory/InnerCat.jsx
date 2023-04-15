import React from 'react';
import './InnerCatcss.css';


const InnerCat = ({value}) => {
      console.log('value',value)
      const {val,path}= value;
  return (
    <>
    <div className='innercatcomp'>
        <div className='Innercontent'>
        <img
        src={`${path}/${val.image}`}
        alt="catImage"
        className='catImage'
        />
        </div>
        <div>
         
            <h6>{val.name}</h6>
        </div>
    </div>

    </>
  )
}

export default InnerCat