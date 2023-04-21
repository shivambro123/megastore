import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../redux/SingleProduct/Action';
import Carousel from 'react-bootstrap/Carousel';
import './ViewSingleProductcss.css'

const ViewSingleProduct = () => {
    const singledata = useSelector(state=>state.singleProduct);
    const singleproductdata = singledata.product.data;
    const path = singledata.product.path;
    console.log(path)
    // console.log('ss',singleproductdata) 
    console.log('single',singledata);
    const dispatch = useDispatch()
    const {prodID} = useParams();

    // console.log(prodID);

    useEffect(()=>{
        dispatch(getSingleProduct(prodID));
    },[])
  return (
    <>
    <div className='viewContainer container'>
        <div className='viewWrapper'>
        
            <div className='imagewrapper'>
            <Carousel>
                {
                    singleproductdata?.images.map((val)=>{
                        console.log(val)
                        return (
                            <Carousel.Item className='crouselItem'>
                            <img
                              className="d-block carouselimage"
                              src={`${path}/${val}`}
                              alt="First slide"
                            />
                           
                          </Carousel.Item>
                        )
                    })
                }
    </Carousel>
    </div>
    <div className='contanetwrapper'>
                <h3>{singleproductdata.name}</h3>
                <h3>Rs. {singleproductdata.user_price}</h3>
                <p>{singleproductdata.description}</p>
                <div className='d-flex '>
                    <div>- 1 +</div> 
                    <div>- 1 +</div> 

                    </div>
            </div>
            </div>
           
   
    </div>
    </>
  )
}

export default ViewSingleProduct