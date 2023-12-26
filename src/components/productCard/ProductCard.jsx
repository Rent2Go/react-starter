import React, { useEffect, useState } from "react";
import "./productCard.css";
import axios from "axios";
import { SiCodereview } from "react-icons/si";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const ProductCard = ({ product }) => {
  // State tanımlamaları
  const [products, setProducts] = useState([]);
  const [idList, setIdList] = useState([0]);
  

  // idList'e id ekleyen fonksiyon
  const addToIdList = (id) => {
    if (!idList.includes(id)) {
      setIdList([...idList, id]);
    }
  };

  // Ürün silme işlemini başlatan fonksiyon
  const handleDelete = (id) => {
    addToIdList(id);
    alert('Silme işlemi gerçekleştiriliyor...');
  };

  // Verilerin API'den alıp daha sonra  products state'ine atanması burada yapılıyor.
  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
    console.log(response.data.products);
  };

  // idList'teki elemanlar hariç yeni bir ürün listesi oluşturmak için yazdığım kısım 
  let newValue = products.filter((deleteProduct) => {
    return idList.map((id) => id !== deleteProduct.id).every(Boolean);
  });

 
  return (
    <div className="row">
      {newValue.map((product) => (
        <div className="col-3 mb-3" key={product.id}>
          <div className="card product-card">
            <img src={product.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="action-row">
                {/* Ürün detayına gitmek için buton */}
                <Link
                  to={`/productDetail/${product.id}`}
                  className="btn btn-secondary btn-sm btn-review"
                >
                  <SiCodereview /> Review
                </Link>
                {/* Ürünü silmek için buton */}
                <Link
                  onClick={() =>  handleDelete(product.id)}
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
