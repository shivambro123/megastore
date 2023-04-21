import React, { useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./ShopProductcss.css";
import SingleProduct from "./SingleProduct/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getfeaturedProduct } from "../redux/FeturedProduct/Action";

const ShopProduct = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getfeaturedProduct())
  },[])
    const productdata =useSelector(state => state.featureproduct);
    const productvalue = productdata.product.data;
    const path = productdata.product.path;
    console.log(path)
    console.log(productdata.product.data);
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
                <select>
                  <option>0-50 &#8377;</option>
                  <option>50-100 &#8377;</option>
                  <option>100-150 &#8377;</option>
                  <option>above 150 &#8377;</option>
                </select>
              </div>
            </div>
            <div className="shopbrand">
              <h3>Brand Product</h3>
              <form>
                <div className="inputdiv">
                  <input type="checkbox" name="Apsara" /> <span>Apsara</span>
                </div>
                <div className="inputdiv">
                  <input type="checkbox" name="Classmate" />{" "}
                  <span>Classmate</span>
                </div>
                <div className="inputdiv">
                  <input type="checkbox" name="Parker" /> <span>Parker</span>
                </div>
                <div className="inputdiv">
                  <input type="checkbox" name="Maybelline" />{" "}
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
                {
                    productvalue?.map((val,ind)=>{
                        return <SingleProduct val={val} path={path}/>
                    })
                }
                </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProduct;
