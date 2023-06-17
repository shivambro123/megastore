import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../redux/SingleProduct/Action';
import Carousel from 'react-bootstrap/Carousel';
import './ViewSingleProductcss.css';
import payment from '../Images/payment.png'
import ShopMore from '../ShopMore/ShopMore';
import Services from '../Services/Services';
import { addCart } from '../redux/FeturedProduct/Action';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import {ModalComp} from './ModalComp';

const ViewSingleProduct = () => {
    const singledata = useSelector(state=>state.singleProduct);
    const message = useSelector(state =>state.featureproduct)
    const [quantity,setQuantity]=useState(1)
    console.log(message,'message');
  const [userid,setUserid]=useState(null)
  const [show, setShow] = useState(false);

    const singleproductdata = singledata.product.data;
    const path = singledata.product.path;
    console.log(singleproductdata,'single')
    // console.log('ss',singleproductdata) 
    console.log('single',singledata);
    const dispatch = useDispatch()
    const {prodID} = useParams();

    // console.log(prodID);

    useEffect(()=>{
        dispatch(getSingleProduct(prodID));
        setUserid(localStorage.getItem('UserId'))
    },[])
    const addCartHandler = (val,userID,quantity) =>{
      dispatch(addCart(val,userID,quantity))
    setShow(true)
    }
    const decrementProduct = () =>{
      (quantity == 1) ? setQuantity(1) : setQuantity(quantity - 1)
    }
 
  
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
                <h3>Rs. {(singleproductdata?.user_price) * quantity}</h3>
                <p>{singleproductdata?.description}</p>
                <div className='ButtonWrapper'>
                    <div className='quantity'><button onClick={decrementProduct}>- </button> <span>{quantity}</span> <button onClick={()=>{setQuantity(quantity +1)}}>+</button></div> 
                    <div className='addcartonebutton'> <button onClick={()=>addCartHandler(singleproductdata._id,userid,quantity)}>Add to Cart</button></div> 
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
                <Row className="toastmsg">
      <Col xs={6}>
      {[
       
        'Dark'
       
      ].map((variant, idx) => (
        <Toast onClose={() => setShow(false)} show={show} delay={3000}   bg={variant.toLowerCase()}  autohide>
          
          <Toast.Body className={variant === 'Dark' && 'text-white'}>{message?.message}</Toast.Body>
        </Toast>
          ))}
      </Col>
    
    </Row>
          
    </div>
    </>
  )
}

export default ViewSingleProduct