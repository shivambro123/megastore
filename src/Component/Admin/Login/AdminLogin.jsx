import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminLogincss.css'
import { adminLogin, getAdmin } from '../../redux/Admin/Login/Action';


const AdminLogin = () => {
  const navigate = useNavigate()
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getAdmin())
   },[])
  
    return(
      <>

      <div className='loginwrapper container'>    
      <div className='logindiv'>
  
          <h1>Admin Login</h1>
          <div className='formwrapper'>
      <div className='loginform'>
          <p>Registered Admin</p>
          <span>Please Remember Your Login Credentials</span>
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
          dispatch(adminLogin(values,navigate));
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
            placeholder='Email'
          /><br/>
          {errors.email && touched.email && errors.email}<br/>
          <label>Password <span style={{color:'red'}}>*</span></label><br/>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder='Password'
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
        <p>For First Time Create an Account</p>
      <button><NavLink className="nav-link" to="/admin-register">Create Account</NavLink></button>
        
    </div>
  </div>    
  </div>
  </div>
  </>
)};

export default AdminLogin;