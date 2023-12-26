import React from "react";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./addProduct.css";

const AddProduct = () => {
  const initialValues = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  };

  const schema = Yup.object({
    title: Yup.string().required("Ürün adı zorunludur!"),
    description: Yup.string().required("Zorunlu alan"),
    price: Yup.number().required("Zorunlu alan"),
    discountPercentage: Yup.number().required("Zorunlu alan"),
    rating: Yup.number().required("Zorunlu alan"),
    stock: Yup.number().required("Zorunlu alan"),
    brand: Yup.string().required("Zorunlu alan"),
    category: Yup.string().required("Zorunlu alan"),
    thumbnail: Yup.string().required("Zorunlu alan"),
  });
  return (
    <>
      <div className="productForm__section">
        <Form>
          <div className="row">
            <div className="col-4">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" />
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Category Name" />
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Brand of Product"
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price of Product"
                />
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Discount Percentage"
                />
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Count of Product"
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Images</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AddProduct;
