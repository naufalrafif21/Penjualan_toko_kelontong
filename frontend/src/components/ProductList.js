import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
 
const ProductList = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getProducts();
  }, []);
 
  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };
 
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  
 
  return (
    <div className="container mt-5">
      {/* -------------------------------------------------------header--------------------------------------------------------- */}
      <nav className="nav navbar " style={{backgroundColor: "#cfd4ed"}}>
        <div className="container-fluid d-flex justify-content-between w-90">
          <Link to="/" >
            <h1 className="title">TOKO HARAPAN WARGA</h1>
            <h1 className="title is-5">Tokonya Orang Santuy</h1>
          </Link>  

          {/* <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <Link to="/add" className="button is-success">
            Add New
          </Link>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </nav>
      {/* --------------------------------------------------------card---------------------------------------------------------- */}
      <div className="columns is-multiline mt-2 ">
        {products.map((product) => (
          <div className="column is-one-quarter" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="gambar" className="img-thumbnail" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                    <p className="text">Stock:{product.stock}</p>
                  </div>
                </div>
              </div>
 
              <footer className="card-footer">
                <Link to={`edit/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                <Link
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </Link>
              </footer>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
 
export default ProductList;