import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../redux/SingleProduct/Action';
import Carousel from 'react-bootstrap/Carousel';
import './ViewSingleProductcss.css';
import payment from '../Images/payment.png'
import ShopMore from '../ShopMore/ShopMore';
import Services from '../Services/Services';


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
    <div className="py-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/" className="bread">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread">View</Breadcrumb.Item>
          </Breadcrumb>
        </div>
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
                <h3>{singleproductdata?.name}</h3>
                <h3>Rs. {singleproductdata?.user_price}</h3>
                <p>{singleproductdata?.description}</p>
                <div className='ButtonWrapper'>
                    <div className='quantity'><button>- </button> <span>1</span> <button>+</button></div> 
                    <div className='addcartonebutton'> <button>Add to Cart</button></div> 
                    </div>
            <div className='buynow'> <button>Buy It Now</button></div>
            <hr></hr>
            <div className='securecheckout'>
              <div className='secureimage'>
                <img
                src={payment}
                alt="payment"
                />
                </div>
                <div className='slogan'>
                  <h4>Guarantee safe & secure checkout</h4>
                </div>
            </div>
            </div>
            </div>
                <ShopMore/>
                <Services/>
          
    </div>
    </>
  )
}

export default ViewSingleProduct