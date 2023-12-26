import React from "react";
import ProductCard from "../../components/productCard/ProductCard"

import "./products.css";

const Products = ({product}) => {
  return (
  <div id="product" className="container mt-10">
   
      <ProductCard product = {product} />

  </div>
  )
};

export default Products;
