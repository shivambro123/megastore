import React, { useEffect, useState } from "react";
import "./CategoryCompcss.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/Category/Action";
import InnerCat from "./InnerCategory/InnerCat";


const CategoryComp = () => {
  const categorydata = useSelector((state) => state.category.category);
  const [category,setCategory]=useState([])
  const [path,setPath]=useState('')
  console.log(categorydata.path);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  useEffect(()=>{
    setCategory(categorydata.data)
    setPath(categorydata.path)
  },[categorydata.data])
  return (
    <div className="catwrapper container">
      <div className="categorydiv">
        <div className="catheader">
          <div className="cat">
            <h3>Popular categories</h3>
          </div>
          <div>
            <NavLink className="nav-link text-color-black" to="/product">
              Shop all categories{" "}
              <i class="fa fa-caret-right " aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
        <div className="innercategoryWrapper">
         {
            category?.map((val,ind)=>{
                return <InnerCat value={{val,path}} />
            })
         }
        </div>
      </div>
    </div>
  );
};

export default CategoryComp;
