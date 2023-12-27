import React, { useEffect, useState } from "react";
import "./productCard.css";
import axios from "axios";
import { SiCodereview } from "react-icons/si";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [idList, setIdList] = useState([0]);

  const addToIdList = (id) => {
    if (!idList.includes(id)) {
      setIdList([...idList, id]);
    }
  };

  const handleDelete = (id) => {
    addToIdList(id);
<<<<<<< HEAD
    alert('Deletion process is underway...');
=======
    alert("Silme işlemi gerçekleştiriliyor...");
>>>>>>> 1fe8d1aa6f7909f066381f7558c6cbc02f7899e3
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
    console.log(response.data.products);
  };

<<<<<<< HEAD
  let filteredProducts = products.filter((product) => {
    return idList.map((id) => id !== product.id).every(Boolean);
=======
  // idList'teki elemanlar hariç yeni bir ürün listesi oluşturmak için yazdığım kısım
  let newValue = products.filter((deleteProduct) => {
    return idList.map((id) => id !== deleteProduct.id).every(Boolean);
>>>>>>> 1fe8d1aa6f7909f066381f7558c6cbc02f7899e3
  });

  return (
    <div className="row">
      {filteredProducts.map((product) => (
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
                  <SiCodereview className="icon-review" /> Review
                </Link>
                <Link
<<<<<<< HEAD
=======
                  to={`/updateProduct/${product.id}`}
                  className="btn btn-warning btn-sm btn-review"
                >
                  <RiEdit2Line />
                  Update
                </Link>
                <Link
>>>>>>> 1fe8d1aa6f7909f066381f7558c6cbc02f7899e3
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger btn-sm btn-review"
                >
                  <FaTrash /> Delete
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;