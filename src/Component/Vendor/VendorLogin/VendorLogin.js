import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import './VendorLogincss.css'
import { getVendor, vendorLogin } from '../../redux/Vendor/Action';


const VendorLogin = () => {
  const navigate = useNavigate()
   const dispatch = useDispatch()
    
   useEffect(()=>{
    dispatch(getVendor())
   },[])
    return(
      <>

      <div className='loginwrapper container'>    
      <div className='logindiv'>
  
          <h1>Vendor Login</h1>
          <div className='formwrapper'>
      <div className='loginform'>
          <p>Registered Customers</p>
          <span>If you have an account, sign in with your email address.</span>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
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
      dispatch(vendorLogin(values,navigate));
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
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='email'
          /><br/>
          {errors.email && touched.email && errors.email}<br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder='password'
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
        <p>Create an Account</p>
        <p>Sign up to earn more and deliver good quality</p>
    <NavLink to="/vendor-register">Create Account</NavLink>
        
    </div>
  </div>
  </div>
  </div>
  </>
)};

export default VendorLogin;