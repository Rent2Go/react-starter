import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import "./productDetail.css"
import axios from 'axios';

const ProductDetail = () => {
    let { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
      axiosGet();
    }, []);

    const axiosGet = async () => {
        
        let response = await axios.get("https://dummyjson.com/products/" + id);
        setProducts(response.data.products);
        console.log(response.data.products);
      };
    
    
  return (
    <div>

<div className="row">
      {products.map((product) => (
        <div className="col-3 mb-3" key={product.id}>
          <div className="card product-card">
            <img src={product.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="action-row">
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default ProductDetail