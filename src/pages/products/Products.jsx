import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import AddProduct from "../../../src/pages/products/addProduct/AddProduct";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./products.css";

const Products = ({ product }) => {
  return (
    <div id="product" className="container mt-10 product__section">
      <Link to={`/addProduct/`} className="btn btn-info btn-sm btn-add">
        Add New
      </Link>
      <ProductCard product={product} />
    </div>
  );
};

export default Products;
