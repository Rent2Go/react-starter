import React, { useEffect, useState } from "react";

import "./productCard.css";
import axios from "axios";
import { SiCodereview } from "react-icons/si";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
    console.log(response.data.products);
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-3 mb-3" key={product.id}>
          <div className="card product-card">
            <img src={product.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="action-row">
                <Link
                  to={`/productDetail/${product.id}`}
                  className="btn btn-secondary btn-sm btn-review"
                >
                  <SiCodereview />  Review
                </Link>
                <button type="button" src="#" className="btn btn-danger btn-sm">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
