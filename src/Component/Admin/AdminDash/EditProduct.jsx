import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getfeaturedProduct } from "../../redux/FeturedProduct/Action";
import { getSingleProduct } from "../../redux/SingleProduct/Action";

const EditProduct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);
  const data = useSelector((state) => state.singleProduct.product);
  const singleProductpath = data?.path;
  const singleProductData = data?.data;
  console.log(data.data);
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="my-5 p-4">
              <Formik
                initialValues={{ name: singleProductData?.name, image: null ,brand:singleProductData?.brand }}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    navigate("/admin-dashboard");
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
                    type="text"
                    name="brand"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.brand}
                    placeholder="brand"
                    required
                  />
                  {errors.brand && touched.brand && errors.brand}
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

export default EditProduct;
