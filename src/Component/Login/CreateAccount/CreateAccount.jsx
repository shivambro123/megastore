import React, { useEffect } from "react";
import { Formik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './CreateAccountcss.css'
import { registerUser } from "../../redux/Login/Action";
const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <>
    <div className='loginwrapper container'>    
    <div className='logindiv'>
        
        <h1>Create Account</h1>
        <div className='formwrapper'>
   
    <div className='createform'>
        <p>Sign-in Information</p>  
 
      <Formik
        initialValues={{ name: "", email: "", location: "" , password: "", confirm_password:"" }}
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
            errors.password = "Password is required";
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
              type="text"
              name="location"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location}
              placeholder="location"
            /><br/>
        
            {errors.location && touched.location && errors.location}<br/>
              <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="password"
            /><br/>
            {errors.password && touched.password && errors.password}<br/>
            <input
              type="password"
              name="confirm_password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm_password}
              placeholder="confirm_password"
            /><br/>
            {errors.confirm_password && touched.confirm_password && errors.confirm_password}<br/>
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
</>
  );
};

export default CreateAccount;
