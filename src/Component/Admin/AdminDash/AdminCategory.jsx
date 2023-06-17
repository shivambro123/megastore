import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Button} from "react-bootstrap";
import './AdminCategorycss.css';
import { deleteoneCategory, getCategory } from "../../redux/Category/Action";
import { NavLink } from "react-router-dom";

const AdminCategory = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategory())
  },[])

  const data = useSelector((state) => state.category.category);
  const catImagepath = data?.path;
  const catData = data?.data;
  console.log(data);
  console.log(catImagepath);
  console.log(catData);

  const deleteCategory = (id) =>{
      dispatch(deleteoneCategory(id))
  }
  return (
    <div className="adminCategory">
   <div className="p-2">  <Button> <NavLink to="/admin/add-category" className="nav-link">Add Category</NavLink></Button></div>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          catData?.map((val,ind)=>{
            return (
              <tr>
              <td>{ind+1}</td>
              <td>{val.name}</td>
              <td><img src={`${catImagepath}/${val.image}`} style={{height:'40px',width:'150px'}}/>
              </td>
              <td><Button><NavLink to={`/admin/edit-category/${val._id}`} className="nav-link">EDIT</NavLink></Button> <Button onClick={()=>{deleteCategory(val._id)}}>DELETE</Button></td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    </div>
  );
};

export default AdminCategory;
