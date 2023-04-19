import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./CheckNavcss.css";
import logo from '../Images/logo.png'
import { NavLink } from "react-router-dom"; 
import Badge from 'react-bootstrap/Badge';


function CheckNavbar() {
  return (
    <>
      <div style={{background:'white'}}>
        <Container className="py-0 navbarwrapper" >
          {["lg"].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-1">
              <Container fluid>
                <Navbar.Brand href="/">
                  <img src={logo} className="logosize" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="d-flex ms-5 justify-content-end formdiv">
                      <div className="input_div">
                        <input placeholder="Search Products" className="inputtype"/>
                        <div className="searchdiv">
                          <i class="fa fa-search" aria-hidden="true"></i>{" "}
                        </div>{" "}
                      </div>
                    </div>
                    <Nav className="justify-content-end navdiv align-items-center flex-grow-1 px-3">
                      <NavLink className="nav-link icon mx-2" to="/login"><i class="fa fa-user-o" aria-hidden="true"></i></NavLink>
                      <NavLink className="nav-link icon mx-2" to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"><Badge bg="secondary">9</Badge></i> </NavLink>
                      
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </Container>
      </div>
      <div>
        <Container className="secondnav">
          <div className="navbar container gx-4">
            <div className="shop">
              {" "}
              <h4>
                <i class="fa fa-bars" aria-hidden="true"></i> SHOP BY CATEGORIES
              </h4>
            </div>
            <div className="list">
              <ul>
                <li>demo</li>
                <li>shop</li>
                <li>products</li>
                <li>page</li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="overList" style={{}}>
            <ul>
              {/* {
                value?.map((val)=>{
                    return <li style={{textTransform:'capitalize'}}>{val.name}</li>
                })
              }  */}
            </ul>
          </div>
        </Container>
        <div className="secondsearch">
        <Form className="d-flex  justify-content-end formdiv">
                
                  <div className="input_div">
                   
                    <input placeholder="Search Products" className="inputtype"/>
                    <div className="searchdiv">
                      <i class="fa fa-search" aria-hidden="true"></i>{" "}
                    </div>{" "}
                  </div>
                </Form>
                </div>
      </div>
    </>
  );
}

export default CheckNavbar;
