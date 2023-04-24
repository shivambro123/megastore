import React from 'react'
import './SingleProductcss.css';
import { NavLink } from 'react-router-dom';

const SingleProduct = ({val,path}) => {
    console.log(val.thumbnail)
  return (  
    <>
                    <div className="singleproductdiv">
                      <NavLink className="nav-link" to={`/viewsingleproduct/${val._id}`}>
                        <div className="singleproductImage">
                        <img
                        src={`${path}/${val.thumbnail}`}
                        className='imagessingle'
                        alt="image product"
                        />
                        </div>
                        <div className="singleproductData">
                            <h4 style={{fontSize:'14px'}}>{val.name}</h4>
                            <h4 style={{fontSize:'14px'}}>Price: &#8377;{val.user_price}</h4>
                        </div>
                        </NavLink>
                        <div className="buybutton">
                            <button><NavLink className="nav-link">Add To Cart</NavLink></button>
                        </div>
                    </div>
                
    </>
  )
}

export default SingleProduct