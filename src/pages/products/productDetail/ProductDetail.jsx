import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({ images: [] });

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products/" + id);
    setProduct(response.data);
    console.log(response.data);
  };

  return (
    <div className="productDetail__section">
      <div className="row">
        <div className="col-12 mb-3 mt-5" key={product.id}>
          <div className="productDetail__section-image_container">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`Product Image ${index + 1}`} />
            ))}
          </div>

          <div className="productDetail__section-head">
            <h1>{product.brand}</h1>
          </div>
          <div className="productDetail__section-content">
            <p className="">{product.description}</p>
            <div className="action-row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
