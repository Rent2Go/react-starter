import React, { useState } from "react";
import * as Yup from "yup";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import "./addProduct.css";

const AddProduct = () => {
  const [productData, setProductData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand: "",
    price: "",
    discountPercentage: "",
    stock: "",
    images: [],
  });

  const schema = Yup.object({
    title: Yup.string().required("Product name is required!"),
    category: Yup.string().required("Required field"),
    brand: Yup.string().required("Required field"),
    price: Yup.number().required("Required field").positive("Cannot be negative"),
    discountPercentage: Yup.number()
      .required("Required field")
      .min(0, "Cannot be less than 0")
      .max(100, "Cannot be greater than 100"),
    stock: Yup.number().required("Required field").integer(),
    images: Yup.array().min(1, "Add at least one image"),
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    const fileInput = type === "file";
    const fileData = fileInput ? Array.from(files) : [];

    setFormData((prevData) => ({
      ...prevData,
      [name]: fileInput ? fileData : value,
    }));
  };

  const handleImageUpload = (e) => {
    const { name, files } = e.target;
    const fileData = Array.from(files);

    setFormData((prevData) => ({
      ...prevData,
      [name]: fileData,
    }));
  };

  const calculateDiscountedPrice = () => {
    const price = parseFloat(formData.price);
    const discountPercentage = parseFloat(formData.discountPercentage) / 100;

    return (price - price * discountPercentage).toFixed(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        const discountedPrice = calculateDiscountedPrice();

        setProductData((prevProductData) => [
          ...prevProductData,
          { ...formData, discountedPrice },
        ]);
        setFormData({
          title: "",
          category: "",
          brand: "",
          price: "",
          discountPercentage: "",
          stock: "",
          images: [],
        });
      })
      .catch((error) => {
        console.error("Form validation error:", error.errors);
      });
  };

  return (
    <div className="productForm__section">
      <h2>Add Product</h2>
      <Form onSubmit={handleFormSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="discountPercentage">
              <Form.Label>Discount Percentage (%)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Discount Percentage"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="stock">
              <Form.Label>Stock Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Stock Quantity"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="images" className="mb-3">
          <Form.Label>Images</Form.Label>
          <Form.Control
            type="file"
            multiple
            name="images"
            onChange={handleImageUpload}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>

      <div className="productList__section">
        <h2>Added Products</h2>
        <Row xs={1} md={3} className="g-4">
          {productData.map((product, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={
                    product.images.length > 0
                      ? URL.createObjectURL(product.images[0])
                      : "https://via.placeholder.com/300"
                  }
                  alt={product.title}
                  style={{ objectFit: "cover", maxHeight: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <strong>Category:</strong> {product.category}
                    <br />
                    <strong>Brand:</strong> {product.brand}
                    <br />
                    <strong>Price:</strong> {product.price} TL
                    <br />
                    <strong>Discounted Price:</strong> {product.discountedPrice}{" "}
                    TL
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AddProduct;
