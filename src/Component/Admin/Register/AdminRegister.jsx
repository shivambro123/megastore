import React, { useEffect } from "react";
import { Formik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './AdminRegistercss.css'
import { registerUser } from "../../redux/Login/Action";
const AdminRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className='loginwrapper container'>    
    <div className='logindiv'>
        
        <h1>Create Account</h1>
        <div className='formwrapper'>
    <div className='loginform'>
        <p>Personal Information</p>
        </div>
    <div className='createform'>
        <p>Sign-in Information</p>  
 
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if(!values.name){
            errors.name = "Name is required"; 
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if(!values.password){
            errors.password = "Contact is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values));
            dispatch(registerUser(values))
            navigate('/login')
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
            /><br/>
            {errors.name && touched.name && errors.name}<br/>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email"
            /><br/>
            {errors.email && touched.email && errors.email}<br/>
            
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

export default AdminRegister;
