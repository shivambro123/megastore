import React from "react";
import { Outlet } from "react-router-dom";
import CheckNavbar from "../Navbar/CheckNavbar";
import Footer from "../Footer/Footer";

const PublicRoute = () => {
  return (
    <div>
      <CheckNavbar />
      <Outlet />
      <Footer />  
    </div>
  );
};

export default PublicRoute;
