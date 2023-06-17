import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editItem,
  getCart,
  removeAll,
  removeItem,
} from "../redux/FeturedProduct/Action";
import { NavLink } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import "./CartCompcss.css";

const CartComp = () => {
  const [userId, setUserId] = useState(localStorage.getItem("UserId"));
  // const [quantity, setQuantity] = useState(1);
  
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const cartdata = useSelector((state) => state.featureproduct);
  const path = cartdata?.cart?.path;
  console.log(cartdata?.cart?.path, "cart");
  console.log(cartdata?.cart, "cart1");

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const RemoverfromCart = (id) => {
    console.log(id, "idddd");
    dispatch(removeItem(id));
    dispatch(getCart());
  };

  const decrementProduct = (id, quantity) => {  
    dispatch(editItem(id, quantity - 1));
    dispatch(getCart());
  };
  const UpdateQuantity = (id, quantity) => {
    dispatch(editItem(id, quantity + 1));
  
  };

 
  return (
    <>
    <div className="cartContainer">
      <div className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="bread">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item className="bread">Cart</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="cartwhole">
        {cartdata?.cart?.data?.map((val) => {
          return (
            <div className="innercartdiv">
              <div className="cartproductdiv">
                <div className="singleproductImage">
                  <img
                    src={`${path}/${val.product.image}`}
                    className="imagessingle"
                    alt="image product"
                  />
                </div>
                <div className="singleproductData">
                  <h4 style={{ fontSize: "14px" }}>{val.product.name}</h4>
                  <h4 style={{ fontSize: "14px" }}>
                    Price: &#8377;{val.product.price}
                  </h4>
                </div>
                <div className="ButtonWrapper">
                  <div className="quantity">
                    <button
                      onClick={() =>
                        decrementProduct(val._id, val.product.quantity)
                      }
                    >
                      -{" "}
                    </button>{" "}
                    <span>{val.product.quantity}</span>{" "}
                    <button
                      onClick={() =>
                        UpdateQuantity(val._id, val.product.quantity)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="buybutton">
                  <div className="d-flex">
                    <button
                      onClick={() => {
                        RemoverfromCart(val._id);
                      }}
                    >
                      <NavLink className="nav-link">Remove</NavLink>
                    </button>
                    {/* <button
                  onClick={() => {  
                   EditProduct(val._id)
                  }}>
                <NavLink className="nav-link">Edit</NavLink>

                </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="d-block">
        <button onClick={() => Removeall()}>Remove All Item</button>
      </div> */}
        <Row className="toastmsg">
          <Col xs={6}>
            {["Dark"].map((variant, idx) => (
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                bg={variant.toLowerCase()}
                autohide
              >
                <Toast.Body className={variant === "Dark" && "text-white"}>
                  {cartdata?.error}
                </Toast.Body>
              </Toast>
            ))}
          </Col>
        </Row>
      </div>

    </div>

    </>

  );
};

export default CartComp;
