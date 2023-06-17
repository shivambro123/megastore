import React, { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addCategory } from "../../redux/Category/Action";

const AddCategory = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.category?.singlecategory);
  const singlecatPath = data?.path;
  const singlecatData = data?.data;
  console.log(data);
  const dispatch = useDispatch();
 const imgRef = useRef()
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="my-5 p-4">
              <Formik
                initialValues={{ name: "", image: null }}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    console.log(values)
                    console.log(imgRef.current.files[0])
                    const formData = new FormData()
                    formData.append('name',values.name)
                    formData.append('image',imgRef.current.files[0])
                    dispatch(addCategory(formData))
                    navigate('/admin/category')
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
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="name"
                      required
                    />
                    {errors.name && touched.name && errors.name}
                    <br />
                    <input
                      type="file"
                      name="image"
                      ref={imgRef}
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                      accept="image/*"
                      placeholder="image"
                    />
                    {errors.image && touched.image && errors.image}
                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddCategory;
