import React, { useEffect, useState } from "react";

import "./productCard.css";
import axios from "axios";

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
                <button type="button" src="#" className="btn btn-primary mr-5">
                  Review
                </button>
                <button type="button" src="#" className="btn btn-danger">
                  Delete
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
