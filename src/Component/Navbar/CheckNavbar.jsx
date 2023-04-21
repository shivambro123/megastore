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
import { useState } from "react";
import { useSelector } from "react-redux";


function CheckNavbar() {
  const [search,setSearch] = useState('')

  // category
  const [cat,setCat]=useState('none')
  const categorydata = useSelector(state=>state.category)
  const categorymap = categorydata.category.data;
  console.log(categorymap,'cat')
  console.log(categorydata);
  const categoryHandler = () =>{
    (cat === "none") ? setCat('block') : setCat('none')
  }



  const searchProduct = (e) =>{
    setSearch(e.target.value.toLowerCase())
  }
  const product = useSelector(state=>state.featureproduct)
  const check = product.product.data;
  console.log(product.product.data)
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
                        <input placeholder="Search Products" className="inputtype" onChange={searchProduct}/>
                        <div className="searchdiv">
                          <i class="fa fa-search" aria-hidden="true"></i>{" "}
                        </div>{" "}
                        <div className="d-none">
                        { 
                  check?.filter((val)=>{
                    return (val.name.toLowerCase().includes(search))
                  }).map((val)=>{
                      console.log(val.name)
                  })
                }
                </div>
                      </div>
                    </div>
                    <Nav className="justify-content-end navdiv align-items-center flex-grow-1 px-3">
                      <NavLink className="nav-link icon mx-2" to="/login"><i class="fa fa-user-o" aria-hidden="true"></i></NavLink>
                      <NavLink className="nav-link icon mx-2" to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink>
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
            <div className="shop" onClick={categoryHandler}>
              {" "}
              <h4>
                <i class="fa fa-bars" aria-hidden="true"></i> SHOP BY CATEGORIES
              </h4>
            </div>
            <div className="list">
              <ul>
                <li>demo <ion-icon name="caret-down-outline"></ion-icon></li>
                <li>shop <ion-icon name="caret-down-outline"></ion-icon></li>
                <li>products <ion-icon name="caret-down-outline"></ion-icon></li>
                <li>page <ion-icon name="caret-down-outline"></ion-icon></li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="overList" style={{display:`${cat}`}}>
            <ul>
              {
                categorymap?.map((val)=>{
                    return <li className="listitem">{val.name}</li>
                })
              } 
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
