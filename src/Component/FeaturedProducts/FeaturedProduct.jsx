import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getfeaturedProduct } from '../redux/FeturedProduct/Action';

const FeaturedProduct = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getfeaturedProduct())
    },[])
    const fetureProduct = useSelector(state=>state.featureproduct)
    const featProduct = fetureProduct.product.data;
    console.log(featProduct)
    const path = fetureProduct.product.path;
    console.log(path)
    console.log('feat',fetureProduct);
  return (
    <div className="catwrapper container">
    <div className="categorydiv">
      <div className="catheader">
        <div>
          <h3>Featured Products</h3>
        </div>
        <div>
          <NavLink className="nav-link text-color-black">
            Shop all categories{" "}
            <i class="fa fa-caret-right " aria-hidden="true"></i>
          </NavLink>
        </div>
      </div>
      <div className="innercategoryWrapper">
        {
            featProduct?.map((val) =>{
                return (
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
                )
            })
        }
     
      </div>
    </div>
  </div>
  )
}

export default FeaturedProduct