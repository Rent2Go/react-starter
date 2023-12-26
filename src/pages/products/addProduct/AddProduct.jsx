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
    title: Yup.string().required("Ürün adi zorunludur!"),
    category: Yup.string().required("Zorunlu alan"),
    brand: Yup.string().required("Zorunlu alan"),
    price: Yup.number().required("Zorunlu alan").positive("Negatif olamaz"),
    discountPercentage: Yup.number()
      .required("Zorunlu alan")
      .min(0, "0'dan küçük olamaz")
      .max(100, "100'den büyük olamaz"),
    stock: Yup.number().required("Zorunlu alan").integer(),
    images: Yup.array().min(1, "En az bir resim ekleyin"),
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
        console.error("Form doğrulama hatasi:", error.errors);
      });
  };

  return (
    <div className="productForm__section">
      <h2>Ürün Ekle</h2>
      <Form onSubmit={handleFormSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Ürün Adi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ürün Adini Girin"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="category">
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kategori Girin"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="brand">
              <Form.Label>Marka</Form.Label>
              <Form.Control
                type="text"
                placeholder="Marka Girin"
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
              <Form.Label>Fiyat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fiyat Girin"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="discountPercentage">
              <Form.Label>İndirim Orani (%)</Form.Label>
              <Form.Control
                type="text"
                placeholder="İndirim Oranini Girin"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="stock">
              <Form.Label>Stok Miktari</Form.Label>
              <Form.Control
                type="text"
                placeholder="Stok Miktarini Girin"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="images" className="mb-3">
          <Form.Label>Resimler</Form.Label>
          <Form.Control
            type="file"
            multiple
            name="images"
            onChange={handleImageUpload}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ekle
        </Button>
      </Form>

      <div className="productList__section">
        <h2>Eklenen Ürünler</h2>
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
                    <strong>Kategori:</strong> {product.category}
                    <br />
                    <strong>Marka:</strong> {product.brand}
                    <br />
                    <strong>Fiyat:</strong> {product.price} TL
                    <br />
                    <strong>İndirimli Fiyat:</strong> {product.discountedPrice} TL
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
