import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./CheckNavcss.css";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/Category/Action";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function CheckNavbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  // category
  const [cat, setCat] = useState("none");
  const categorydata = useSelector((state) => state.category);
  const categorymap = categorydata.category.data;
  console.log(categorymap, "cat");
  console.log(categorydata);

  const categoryHandler = () => {
    cat === "none" ? setCat("block") : setCat("none");
  };

  const searchProduct = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const product = useSelector((state) => state.featureproduct);
  const check = product?.product?.data;
  console.log(check);

  // login logo
  const [tokencheck, settokenCheck] = useState(localStorage.getItem("Token"));
  // console.log(tokencheck, "check");

  // Cart Count
  const cartCount = useSelector((state) => state?.featureproduct?.count);
  console.log(cartCount, "Count");

  const selectsinglecategory = () => {};
  return (
    <>
      <div className="fixeddiv">
        <div style={{ background: "white" }}>
          <Container className="p-0 navbarwrapper">
            {["lg"].map((expand) => (
              <Navbar key={expand} bg="light" expand={expand} className="mb-1">
                <Container fluid>
                  <Navbar.Brand href="/">
                    <img src={logo} className="logosize" alt="logo" />
                  </Navbar.Brand>

                  <div className="d-flex ms-5 justify-content-end formdiv">
                    <div className="input_div">
                      <input
                        placeholder="Search Products"
                        className="inputtype"
                        onChange={searchProduct}
                      />
                      <div className="searchdiv">
                        <i class="fa fa-search" aria-hidden="true"></i>{" "}
                      </div>{" "}
                      <div className="d-none">
                        {check
                          ?.filter((val) => {
                            return val.name.toLowerCase().includes(search);
                          })
                          .map((val) => {
                            console.log(val.name);
                          })}
                      </div>
                    </div>
                  </div>

                  <Nav className="justify-content-end navdiv align-items-center flex-grow-1 px-3">
                    {!tokencheck ? (
                      <NavLink className="nav-link icon mx-2" to="/login">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </NavLink>
                    ) : (
                      <NavLink className="nav-link icon mx-2" to="#">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                      </NavLink>
                    )}

                    <NavLink className="nav-link icon mx-2" to="/cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                      {cartCount}
                    </NavLink>
                  </Nav>

                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    className="offcanvasbody"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                        className="w-100"
                      ></Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                      <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3 flex-row"
                        justify
                      >
                        <Tab eventKey="home" title="MENU">
                          MENU
                        </Tab>
                        <Tab eventKey="profile" title="CART">
                          CART
                        </Tab>
                      </Tabs>
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
                  <i class="fa fa-bars" aria-hidden="true"></i> SHOP BY
                  CATEGORIES
                </h4>
              </div>
              <div className="list">
                <ul>
                  <li>
                    demo <ion-icon name="caret-down-outline"></ion-icon>
                  </li>
                  <li>
                    shop <ion-icon name="caret-down-outline"></ion-icon>
                  </li>
                  <li>
                    products <ion-icon name="caret-down-outline"></ion-icon>
                  </li>
                  <li>
                    page <ion-icon name="caret-down-outline"></ion-icon>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
            <div className="overList" style={{ display: `${cat}` }}>
              <ul>
                {categorymap?.map((val) => {
                  return (
                    <li
                      value={val.name}
                      onClick={() => selectsinglecategory()}
                      className="listitem"
                    >
                      {val.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
          <div className="secondsearch">
            <Form className="d-flex  justify-content-end formdiv">
              <div className="input_div">
                <input placeholder="Search Products" className="inputtype" />
                <div className="searchdiv">
                  <i class="fa fa-search" aria-hidden="true"></i>{" "}
                </div>{" "}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckNavbar;
