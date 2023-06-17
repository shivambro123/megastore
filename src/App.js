import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import LoginComp from "./Component/Login/LoginComp";
import CartComp from "./Component/Cart/CartComp";
import PrivateRouter from "./Component/Routing/PrivateRouter";
import CreateAccount from "./Component/Login/CreateAccount/CreateAccount";
import AdminLogin from "./Component/Admin/Login/AdminLogin";
import AdminRegister from "./Component/Admin/Register/AdminRegister";
import VendorLogin from "./Component/Vendor/VendorLogin/VendorLogin";
import VendorRegister from "./Component/Vendor/VendorRegister/VendorRegister";
import NewAdminDash from "./Component/Admin/AdminDash/NewAdminDash";
import NotFound from "./Component/Shop/NotFound/NotFound";
import ViewSingleProduct from "./Component/ViewSingle/ViewSingleProduct";
import Product from "./Component/Product/Product";
import EditCategory from "./Component/Admin/AdminDash/EditCategory";
import AddCategory from "./Component/Admin/AdminDash/AddCategory";
import EditProduct from "./Component/Admin/AdminDash/EditProduct";
import AddProduct from "./Component/Admin/AdminDash/AddProduct";
import AdminProtectedRoute from "./Component/Routing/AdminProtectedRoute";
import PublicRoute from "./Component/Routing/PublicRoute";
import AdminCategory from "./Component/Admin/AdminDash/AdminCategory";
import Dashboard from "./Component/Admin/AdminDash/Dashboard";
import User from "./Component/Admin/AdminDash/User";
import AdminProduct from "./Component/Admin/AdminDash/AdminProduct";
import Vendor from "./Component/Admin/AdminDash/Vendor";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavbarComp/> */}
        <Routes>  
          <Route path="/login" element={<LoginComp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/vendor-login" element={<VendorLogin />} />

          <Route path="/register" element={<CreateAccount />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/vendor-register" element={<VendorRegister />} />

          <Route path="/*" element={<NotFound />} />

          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route
              exact
              path="/viewsingleproduct/:prodID"
              element={<ViewSingleProduct />}
            />
            <Route path="product" element={<Product />} />
            <Route
              path="/cart"
              element={
                <PrivateRouter>
                  <CartComp />
                </PrivateRouter>
              }
            />
          </Route>

          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/admin-dashboard" element={<NewAdminDash />} />
            <Route path="/admin/add-category" element={<AddCategory />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/category" element={<AdminCategory />} />
            <Route path="/admin/product" element={<AdminProduct />} />
            <Route path="/admin/vendor" element={<Vendor />} />
            <Route path="/admin/edit-category/:id" element={<EditCategory />} />
            <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
