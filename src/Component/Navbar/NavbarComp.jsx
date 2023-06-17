// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../Images/logo.png'
// import './NavbarCompcss.css'
// import { useEffect, useState } from 'react';

// function NavbarComp() {

//   const [check,setCheck]=useState(localStorage.getItem('Token'));
//   console.log(check,"check");
//   const logoutCLick = () =>{    
//     (localStorage.removeItem('Token'))
//   }
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="/">
//           <img
//           src={logo}
//           alt="logo"
//           className='logosize'
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav"> 
//           <Nav className="ms-auto">
//          {(!check) ? <NavLink className="nav-link" to="/login">Sign In</NavLink> :<NavLink className="nav-link" onClick={logoutCLick} to="/login">LogOut</NavLink>}  
//             <NavLink className="nav-link" to="/cart">Cart</NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>      
//     </Navbar>
//   );
// }

// export default NavbarComp;