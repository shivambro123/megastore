import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Userlogin, getUsers } from '../redux/Login/Action';
import {useDispatch, useSelector} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import './LoginCompcss.css'


const LoginComp = () => {
  const navigate = useNavigate()
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
          <span>If you have an account, sign in with your email address.</span>
    <Formik
      initialValues={{ email: 'swap@gmail.com', password: 'dahanu' }}
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
          dispatch(Userlogin(values))
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
        <p>Sign up for early Sale access plus tailored new arrivals, trends.</p>
    <NavLink to="/register">Create Account</NavLink>
        
    </div>
  </div>
  </div>
  </div>
  </>
)};

export default LoginComp;