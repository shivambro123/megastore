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

function App() {
  return (
    <div className="App"> 
     <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginComp/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/cart" element={<PrivateRouter><CartComp/></PrivateRouter>}/>
        <Route path="/register" element={<CreateAccount/>}/>
        <Route path="/admin-register" element={<AdminRegister/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
