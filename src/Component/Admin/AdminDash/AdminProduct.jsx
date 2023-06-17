import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Button} from "react-bootstrap";
import './AdminProductcss.css';
import { deleteoneCategory } from "../../redux/Category/Action";
import { NavLink } from "react-router-dom";
import { getfeaturedProduct } from "../../redux/FeturedProduct/Action";

const AdminProduct = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getfeaturedProduct())
  },[])
  const data = useSelector((state) => state.featureproduct.product);
  const productImagePath = data?.path;
  const productData = data?.data;
  console.log(data);

console.log(productImagePath)
  const deleteCategory = (id) =>{
      dispatch(deleteoneCategory(id))
  }
  return (
    <div className="adminCategory">
   <div className="p-2"> <Button> <NavLink to="/admin/add-product" className="nav-link">Add Product</NavLink></Button></div>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Image</th>
            <th>User Price</th>
            <th>Vendor Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          productData?.map((val,ind)=>{
            return (
              <tr>
              <td>{ind+1}</td>
              <td>{val.name}</td>
              <td>{val.brand}</td>
              <td>{val?.category?.name}</td>
              <td><img src={`${productImagePath}/${val.thumbnail}`} style={{height:'50px',width:'150px'}}/>
              </td>
              <td>{val.user_price}</td>
              <td>{val.vendor_price}</td>
              <td><Button><NavLink to={`/edit-product/${val._id}`} className="nav-link">EDIT</NavLink></Button> <Button onClick={()=>{deleteCategory(val._id)}}>DELETE</Button></td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    </div>
  );
};

export default AdminProduct;
