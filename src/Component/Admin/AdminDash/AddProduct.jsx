import React, { useEffect, useState ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct } from "../../redux/FeturedProduct/Action";

const AddProduct = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.featureproduct?.product);
  const singlecatPath = data?.path;
  const singlecatData = data?.data;
  console.log(data);
  const dispatch = useDispatch();
  const thumbnailImage = useRef();
  const prod_image = useRef();

  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="my-5 p-4">
              <Formik
                initialValues={{
                  name: "",
                  images: null,
                  brand: "",
                  category: "",
                  user_price: null,
                  vendor_price: null,
                  prod_quantity: null,
                  rating: null,
                  stock: null,
                  thumbnail:null,
                  description:""
                }}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    console.log(thumbnailImage.current.files[0])
                    const formdata = new FormData()
                    formdata.append('name',values.name)
                    formdata.append('brand',values.brand)
                    formdata.append('category',values.category)
                    formdata.append('user_price',values.user_price)
                    formdata.append('vendor_price',values.vendor_price)
                    formdata.append('description',values.description)
                    formdata.append('rating',values.rating)
                    formdata.append('stock',values.stock)
                    formdata.append('thumbnail',thumbnailImage.current.files[0])
                    formdata.append('images',prod_image.current.files[0])
                    dispatch(addProduct(formdata))
                    // navigate("/admin/product");
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
                      type="text"
                      name="category"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                      placeholder="category"
                      required
                    />
                    {errors.category && touched.category && errors.category}
                    <br />
                    <textarea name="description" rows="10" cols="45"  className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder="description"
                    required >
                    </textarea>
                    {errors.description && touched.description && errors.description}
                    <br/>
                    <input
                      type="text"
                      name="user_price"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.user_price}
                      placeholder="user_price"
                      required
                    />
                    {errors.user_price &&
                      touched.user_price &&
                      errors.user_price}
                    <br />
                    <input
                      type="text"
                      name="vendor_price"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.vendor_price}
                      placeholder="vendor_price"
                      required
                    />
                    {errors.vendor_price &&
                      touched.vendor_price &&
                      errors.vendor_price}
                    <br />
                    <input
                      type="text"
                      name="prod_quantity"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.prod_quantity}
                      placeholder="prod_quantity"
                      required
                    />
                    {errors.prod_quantity &&
                      touched.prod_quantity &&
                      errors.prod_quantity}
                    <br />
                    <input
                      type="text"
                      name="rating"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rating}
                      placeholder="rating"
                      required
                    />
                    {errors.rating && touched.rating && errors.rating}
                    <br />
                    <input
                      type="text"
                      name="stock"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.stock}
                      placeholder="stock"
                      required
                    />
                    {errors.stock && touched.stock && errors.stock}
                    <br />
                    <label>Thumbnail</label>
                    <input
                    type="file"
                    name="thumbnail"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.thumbnail}
                    accept="image/*"
                    placeholder="thumbnail"
                    ref={thumbnailImage}
                  />
                  {errors.image && touched.image && errors.image}
                  <br />
                  <label>Image </label>
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                      accept="image/*"
                      placeholder="image"
                      ref={prod_image}
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

export default AddProduct;
