import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendor } from "../../redux/Vendor/Action";

const Vendor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVendor());
  }, []);
  const vendordata = useSelector((state) => state.vendor);
  console.log(vendordata);
  const uservalue = vendordata.vendors.data;
  const vendorpath = vendordata.vendors.path;
  console.log(vendorpath);

  return (
    <div>
      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Logo</th>
            <th>Email</th>
            <th>Category</th>
            <th>Location</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {uservalue?.map((val, ind) => {
            return (
              <tr>
                <td>{++ind}</td>
                <td>{val.company}</td>
                <td>
                  {" "}
                  <img
                    src={`${vendorpath}/${val.logo}`}
                    style={{ height: "100px", width: "100px" }}
                  />
                </td>
                <td>{val.email}</td>
                <td>
                  {val?.category?.map((val) => {
                    return <p>{val}</p>;
                  })}
                </td>
                <td>{val.vendor_location.address}</td>
                <td>{val.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Vendor;
