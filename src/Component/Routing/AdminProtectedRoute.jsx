import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminPanel from "../Admin/AdminPanel";
const AdminProtectedRoute = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("AdminToken"));
  }, []);
  return (
    <div>
      {token ? (
        <>
          <AdminPanel>
            <Outlet />
          </AdminPanel>
        </>
      ) : (
        navigate("/admin-login")
      )}
    </div>
  );
};

export default AdminProtectedRoute;
