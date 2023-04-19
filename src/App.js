import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './Component/HomePage/HomePage';
import NavbarComp from './Component/Navbar/NavbarComp';
import LoginComp from './Component/Login/LoginComp';
import CartComp from './Component/Cart/CartComp';
import PrivateRouter from './Component/Routing/PrivateRouter';
import CreateAccount from './Component/Login/CreateAccount/CreateAccount';
import AdminLogin from './Component/Admin/Login/AdminLogin';
import AdminRegister from './Component/Admin/Register/AdminRegister';
import VendorLogin from './Component/Vendor/VendorLogin/VendorLogin';
import VendorRegister from './Component/Vendor/VendorRegister/VendorRegister';
import VenProducts from './Component/Vendor/VenProducts/VenProducts';
import AdminDash from './Component/Admin/AdminDash/AdminDash';
import AdminRouter from './Component/Routing/AdminRouter';
import VendorPrivateRoute from './Component/Routing/VendorPrivateRoute';
import CheckNavbar from './Component/Navbar/CheckNavbar';
import NewAdminDash from './Component/Admin/AdminDash/NewAdminDash';

function App() {
  return (
    <div className="App"> 
     <Router>
      {/* <NavbarComp/> */}
      <CheckNavbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginComp/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/vendor-login" element={<VendorLogin/>}/>
        <Route path="/cart" element={<PrivateRouter><CartComp/></PrivateRouter>}/>
        <Route path="/register" element={<CreateAccount/>}/>
        <Route path="/admin-register" element={<AdminRegister/>}/>
        <Route path="/vendor-register" element={<VendorRegister/>}/>
        <Route path="/vendor-product" element={<VendorPrivateRoute><VenProducts/></VendorPrivateRoute>}/>
        <Route path="/admin-dashboard" element={<AdminRouter><NewAdminDash/></AdminRouter>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
