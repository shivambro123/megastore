import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCategory, getCategory, getSingleCategory } from "../../redux/Category/Action";
import { Formik } from "formik";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.category?.singlecategory);
  const singlecatPath = data?.path;
  const singlecatData = data?.data;
  console.log(data);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCategory(id));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="my-5 p-4">
              <Formik
                initialValues={{ name: singlecatData?.name, image: null }}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    dispatch(editCategory(singlecatData?._id, values));
                    navigate("/admin/category");
                    // dispatch(getCategory())
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

export default EditCategory;
