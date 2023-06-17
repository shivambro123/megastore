import React, { useEffect, useState } from "react";
import "./SingleProductcss.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/FeturedProduct/Action";
import ModalComp from "../../ViewSingle/ModalComp";

const SingleProduct = ({ val, path }) => {
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  console.log(val.thumbnail);
  useEffect(() => {
    setUserId(localStorage.getItem("UserId"));
  }, []);
  const AddtoCart = (valId, userId) => {
    dispatch(addCart(valId, userId));
  };
  return (
    <>
      <div className="singleproductdiv">
        <NavLink className="nav-link" to={`/viewsingleproduct/${val._id}`}>
          <div className="singleproductImage">
            <img
              src={`${path}/${val.thumbnail}`}
              className="imagessingle"
              alt="image product"
            />
          </div>
          <div className="singleproductData">
            <h4 style={{ fontSize: "14px" }}>{val.name}</h4>
            <h4 style={{ fontSize: "14px" }}>Price: &#8377;{val.user_price}</h4>
          </div>
        </NavLink>
        <div className="buybutton">
          <button
            onClick={() => {
              AddtoCart(val._id, userId);
            }}
          >
            <NavLink className="nav-link">Add To Cart</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
