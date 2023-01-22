import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
 
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [stock,setStock] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
 
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
 
  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("stock", stock);
    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns is-centered mt-5">

      <nav className="nav navbar " style={{backgroundColor: "#cfd4ed"}}>
        <div className="container-fluid d-flex justify-content-between w-90">
          <Link to="/" >
            <h1 className="title">TOKO HARAPAN WARGA</h1>
            <h1 className="title is-5">Tokonya Orang Santuy</h1>
          </Link>  

        </div>
      </nav>

      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">Nama Produk</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product Name"
              />
            </div>
          </div>
 
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
 
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview gambar" />
            </figure>
          ) : (
            ""
          )}
 
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddProduct;