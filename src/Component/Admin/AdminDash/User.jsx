import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/Login/Action";

const User = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    const userdata = useSelector(state =>state.user)
    console.log(userdata);
    const uservalue = userdata.users.data;
  return (
    <div>
      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {uservalue?.map((val, ind) => {
            return (
              <tr>
                <td>{++ind}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
