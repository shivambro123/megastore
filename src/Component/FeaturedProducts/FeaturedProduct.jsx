import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getfeaturedProduct } from "../redux/FeturedProduct/Action";
import "./FeaturedProductcss.css";
import { addCart } from "../redux/FeturedProduct/Action";
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const FeaturedProduct = () => {
  const [userid,setUserid]=useState(null)
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getfeaturedProduct());
    setUserid(localStorage.getItem('UserId'))
  }, []);
  const fetureProduct = useSelector((state) => state.featureproduct);
  const featProduct = fetureProduct.product.data;
  const path = fetureProduct.product.path;
  console.log(path);
  console.log("feat", fetureProduct);

  // add to cart


  const addCartHandler = (val,userID) =>{
    dispatch(addCart(val,userID))
    setShow(true)

  }
  
  return (
    <div className="productwrapper container">
      <div className="featproductdiv">
        <div className="catheader">
          <div className="cat">
            <h3>Featured Products</h3>
          </div>
          <div className="shopcategory">
            <NavLink className="nav-link text-color-black" to="/product">
              Shop all categories{" "}
              <i class="fa fa-caret-right " aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
        <div className="innerfeatProductWrapper">
          {featProduct?.slice(0,6).map((val) => {
            return (
              <div className="innerfeatproductcomp">
                <div className="Innercontentproduct">
                  <img
                    src={`${path}/${val.thumbnail}`}
                    alt="catImage"
                    className="proImage"
                  />
                </div>
                <div className="product-detail">
                <NavLink className="nav-link" to={`viewsingleproduct/${val._id}`}>

                  <div className="product-name">
                    {" "}
                    <h6>{val.name}</h6>
                  </div>

                  <div className="product-price">
                    <h6>
                      {" "}
                      &#8377;
                      {val.user_price}
                    </h6>
                  </div>
                  </NavLink>
              
                  <div className="productbutton">
                    <button onClick={()=>addCartHandler(val._id,userid)}>Add to Cart</button>
                  </div>
                </div>
           

              </div>

            );
          })}
        </div>
      </div>
      <Row className="toastmessage">
      <Col xs={6}>
      {[
       
        'Dark'
       
      ].map((variant, idx) => (
        <Toast onClose={() => setShow(false)} show={show} delay={3000}   bg={variant.toLowerCase()}  autohide>
          
          <Toast.Body className={variant === 'Dark' && 'text-white'}>{fetureProduct?.message}</Toast.Body>
        </Toast>
          ))}
      </Col>
    
    </Row>
    </div>
  );
};

export default FeaturedProduct;
