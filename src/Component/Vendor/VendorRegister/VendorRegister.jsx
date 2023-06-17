import React, { useEffect ,useState} from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./VendorRegistercss.css";
import { registerUser } from "../../redux/Login/Action";
import { vendorRegister } from "../../redux/Vendor/Action";
import { VendorCategory } from "./VendorCategory";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const VendorRegister = () => {
  const dispatch = useDispatch();

  const category = useSelector(state => state.category);
  console.log(category?.category?.data,'cat')
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);

//checkbox category
const [inputcategory,setInputcategory]=useState([])
const checkboxHandler = (e) =>{
  console.log(e.target.checked)
  if(e.target.checked === true){
    console.log(e.target.value)
    setInputcategory([...inputcategory,e.target.value])
  }
  else if(e.target.checked === false){
    inputcategory.filter((val)=>{
      return val.name !== e.target.value
    })
  }
console.log(inputcategory)
}

  return (
    <div className="loginwrapper container">
      <div className="logindiv">
        <h1>Create Account for vendor</h1>
        <div className="formwrapper">
          <div className="createform">
            <p>Sign-in Information</p>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirm_password: "",
                category: inputcategory,
                location: "",
              }}
              
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Name is required";

                }
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Contact is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values)); 
                  setInputcategory(inputcategory)

                  dispatch(vendorRegister(values));
                  navigate("/vendor-login");
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="name"
                  />
                  <br />
                  {errors.name && touched.name && errors.name}
                  <br />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="email"
                  />
                  <br />
                  {errors.email && touched.email && errors.email}
                  <br />
                 
      <button className="catbutton" onClick={() => setLgShow(true)}>Select Category</button> <br/><br/>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      {
        category?.category?.data.map((val)=>{
          return (<><input type="checkbox" onChange={checkboxHandler} value={val.name} name={val.name}/>{val.name}<br/><br/></>)
        })
      }
      
      <Button variant="light" type="submit"  onClick={()=>setLgShow(false)}>
        Submit
      </Button>
      <p>{inputcategory.map((val)=><span>{val},</span>)}</p>
      </Form>
        </Modal.Body>
      </Modal>

                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="password"
                  />
                  <br />
                  {errors.password && touched.password && errors.password}
                  <br />

                  <input
                    type="password"
                    name="confirm_password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm_password}
                    placeholder="confirm_password"
                  />
                  <br />
                  {errors.confirm_password &&
                    touched.confirm_password &&
                    errors.confirm_password}
                  <br />
                  <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    placeholder="location"
                  />
                  <br />
               

                  {errors.location && touched.location && errors.location}
                  <br />

                  <button type="submit" disabled={isSubmitting}>
                    Register
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
