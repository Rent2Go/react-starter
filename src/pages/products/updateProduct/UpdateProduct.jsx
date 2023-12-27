import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";

import "./updateProduct.css"

const UpdateProduct = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({ images: [] });
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

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products/" + id);
    setProduct(response.data);

    // Initialize form data based on product data received from the API
    setFormData({
      title: response.data.title,
      category: response.data.category,
      brand: response.data.brand,
      price: response.data.price,
      discountPercentage: response.data.discountPercentage,
      stock: response.data.stock,
      images: response.data.images,
    });

    console.log(response.data);
  };

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

    // Check and display an error message if valid conversion cannot be made, or use a default value
    if (isNaN(price) || isNaN(discountPercentage)) {
      alert("Please enter a valid price and discount percentage.");
      return 0; // Or use another default value
    }

    return (price - price * discountPercentage).toFixed(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <div className="productForm__section">
      <h2>Product Update</h2>
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
        <div className="row">
          <div className="col-12">
            <Form.Group controlId="images" className="mb-3">
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                name="images"
                onChange={handleImageUpload}
              />
            </Form.Group>
          </div>
        </div>
        <div className="btn-container">
          <Button variant="outline-success btn-update" type="submit">
            Save
          </Button>
          <Button variant="outline-danger" type="submit">
            Cancel
          </Button>
        </div>
      </Form>

      <div className="productList__section">
        <h2>Updated Products</h2>
        <Row xs={1} md={3} className="g-4">
          {productData.map((product, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={
                    product.images.length > 0 &&
                    product.images[0] instanceof Blob
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

export default UpdateProduct;
