import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./ShopProductcss.css";
import SingleProduct from "./SingleProduct/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getfeaturedProduct } from "../redux/FeturedProduct/Action";
import Services from "../Services/Services";

const ShopProduct = () => {
  const [change, setChange] = useState("");
  const [isChecked, setIschecked] = useState(" ");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getfeaturedProduct());
  }, []);
  const productdata = useSelector((state) => state.featureproduct);
  const productvalue = productdata.product.data;
  const path = productdata.product.path;
  console.log(path);
  console.log(productdata.product.data);
  const changeHandler = (e) => {
    console.log(e.target.value);
     setChange(e.target.value) ;
  };
  const handleInputChange = (e) => {
    console.log(e.target.value);
    (isChecked === " ") ? setIschecked(e.target.value) : setIschecked(" ");
  };
  return (
    <>
      <div className="shopContainer container">
        <div className="py-3">
          <Breadcrumb>
            <Breadcrumb.Item href="/" className="bread">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item className="bread">Shop</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="shopwrapper">
          <div className="filterdiv">
            <div className="filterinnerdiv">
              <div className="shopheader">
                <h3>Filter</h3>
              </div>
              <div className="shopprice">
                <h3>Price</h3>
                <div className="selectdiv">
                  <select onChange={changeHandler}>
                    <option> select &#8377;</option>
                    <option value="100">0-100 &#8377;</option>
                    <option value="500">0-500 &#8377;</option>
                    <option value="2000">500-2000 &#8377;</option>
                    <option value="above">above 2000 &#8377;</option>
                  </select>
                </div>
              </div>
              <div className="shopbrand">
                <h3>Brand Product</h3>
                <form>
                  <div className="inputdiv">
                    <input
                      type="checkbox"
                      name="Apsara"
                      value="Apsara"
                      onChange={handleInputChange}
                    />{" "}
                    <span>Apsara</span>
                  </div>
                  <div className="inputdiv">
                    <input
                      type="checkbox"
                      name="Classmate"
                      value="Classmate"
                      onChange={handleInputChange}
                    />{" "}
                    <span>Classmate</span>
                  </div>
                  <div className="inputdiv">
                    <input
                      type="checkbox"
                      name="Parker"
                      value="Parker"
                      onChange={handleInputChange}
                    />{" "}
                    <span>Parker</span>
                  </div>
                  <div className="inputdiv">
                    <input
                      type="checkbox"
                      name="Maybelline"
                      value="Maybelline"
                      onChange={handleInputChange}
                    />{" "}
                    <span>Maybelline</span>
                  </div>
                </form>
              </div>
            </div>
            <div className="wishlist">
              <h5>My Wish List</h5>
              <p>You have no items in your wish list.</p>
            </div>
          </div>

          <div className="productdiv">
            <div className="product-header">
              <h3>Items</h3>
            </div>
            <div className="innerProductdiv">
              {productvalue
                ?.filter((val) => {
                  if (change === "100") {
                    return val.user_price < 100;
                  } else if (change === "500") {
                    return val.user_price < 500;
                  } else if (change === "2000") {
                    return val.user_price < 2000;
                  } 
                  else if(isChecked === "Apsara"){
                    return val.brand === isChecked
                  }
                  else if(isChecked === "Classmate"){
                    return val.brand === isChecked
                  }
                  else if(isChecked === "Parker"){
                    return val.brand === isChecked
                  }
                  else if(isChecked === "Maybelline"){
                    return val.brand === isChecked
                  }
                  else {
                    return val.user_price > 0;
                  }
                })
                ?.map((val, ind) => {
                  return <SingleProduct val={val} path={path} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProduct;
