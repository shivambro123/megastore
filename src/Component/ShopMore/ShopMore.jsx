import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, getfeaturedProduct } from "../redux/FeturedProduct/Action";
import "./ShopMorecss.css";

const ShopMore = () => {
  const dispatch = useDispatch();
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    dispatch(getfeaturedProduct());
    setUserId(localStorage.getItem('UserId'));

  }, []);
  const fetureProduct = useSelector((state) => state.featureproduct);
  const featProduct = fetureProduct.product.data;
  console.log(featProduct);
  const path = fetureProduct.product.path;
  console.log(path);
  console.log("feat", fetureProduct);

  const AddtoCart = (valId,userId) =>{
    dispatch(addCart(valId,userId));

  }
  return (
    <div className="showmorewrapper container">
      <div className="featproductdiv">
        <div className="catheader">
          <div>
            <h3>Featured Products</h3>
          </div>
          <div>
            <NavLink className="nav-link text-color-black" to="/product">
              Shop all categories{" "}
              <i class="fa fa-caret-right " aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
        <div className="innerfeatProductWrapper">
          {featProduct?.slice(2,8).map((val) => {
            return (
              <div className="innerfeatproductcomp">
                      <NavLink className="nav-link" to={`/viewsingleproduct/${val._id}`}>

                <div className="Innercontentproduct">
                  <img
                    src={`${path}/${val.thumbnail}`}
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
                    <button onClick={()=>{AddtoCart(val._id,userId)}}>Add to Cart</button>
                  </div>
                </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopMore;
