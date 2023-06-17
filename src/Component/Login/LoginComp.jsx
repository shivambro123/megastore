import React, { useEffect,useState } from 'react';
import { Formik } from 'formik';
import { Userlogin, getUsers } from '../redux/Login/Action';
import {useDispatch, useSelector} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import './LoginCompcss.css'


const LoginComp = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const userdata = useSelector(state=>state.user)
  console.log(userdata)
   const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers());
    },[])
    return(
      <>

      <div className='loginwrapper container'>    
      <div className='logindiv'>
  
          <h1>Login</h1>
          <div className='formwrapper'>
      <div className='loginform'>
          <p>Registered Customers</p>
          <span className='spantag'>If you have an account, sign in with your email address.</span>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if(!values.password){
          errors.password = "Password is Required " 
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          dispatch(Userlogin(values,navigate))
          setShow(true)
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
          <label>Email <span style={{color:'red'}}>*</span></label><br/>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
          /><br/>
          {errors.email && touched.email && errors.email}<br/>
          <label>Password <span style={{color:'red'}}>*</span></label><br/>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="password"
          /><br/>
          {errors.password && touched.password && errors.password}<br/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </div>

    <div className='createform'>
        <p className='title'>Create an Account</p>
        <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions.</p>
      <button> <NavLink className="nav-link" to="/register">Create Account</NavLink></button>
        
    </div>
  </div>
  </div>
  </div>
  <Row className='toastmsg'>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={2000} >
          <Toast.Header>
      
          <small className='ms-auto'>ERROR</small>
          </Toast.Header>
          <Toast.Body className='toastbody'>{userdata.error}</Toast.Body>
        </Toast>
      </Col>
     
    </Row>
  </>
)};

export default LoginComp;