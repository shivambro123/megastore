import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getfeaturedProduct } from "../redux/FeturedProduct/Action";
import "./FeaturedProductcss.css";

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getfeaturedProduct());
  }, []);
  const fetureProduct = useSelector((state) => state.featureproduct);
  const featProduct = fetureProduct.product.data;
  console.log(featProduct);
  const path = fetureProduct.product.path;
  console.log(path);
  console.log("feat", fetureProduct);
  
  return (
    <div className="productwrapper container">
      <div className="featproductdiv">
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
        <div className="innerfeatProductWrapper">
          {featProduct?.map((val) => {
            return (
              <div className="innerfeatproductcomp">
                <div className="Innercontentproduct">
                  <img
                    src={`${path}/${val.images[1]}`}
                    alt="catImage"
                    className="proImage"
                  />
                </div>
                <div className="product-detail">
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
                  <div className="productbutton">
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
