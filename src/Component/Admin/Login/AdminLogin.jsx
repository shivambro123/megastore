import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminLogincss.css'


const AdminLogin = () => {
  const navigate = useNavigate()

   const dispatch = useDispatch()
  
    return(
      <>

      <div className='loginwrapper container'>    
      <div className='logindiv'>
  
          <h1>Login</h1>
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
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    </div>

    <div className='createform'>
        <p>Create an Account</p>
        <p>For First Time Create an Account</p>
    <NavLink to="/admin-register">Create Account</NavLink>
        
    </div>
  </div>    
  </div>
  </div>
  </>
)};

export default AdminLogin;