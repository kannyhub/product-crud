import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [products,setProducts] = useState({});
  const [loading,setLoading] = useState(true);

  const getProducts = ()=>{
    axios.get(API_URL+'/product/all')
      .then(function (response) {
          setProducts(response.data.data);
          setLoading(false)
      })
      .catch(function (error) {
          alert(error);
      });
  }

  const deleteProduct = (e)=> {
    let confirmation = window.confirm('Are you sure to delete?');
    if (!confirmation) {
      return false;
    }
    let id = e.currentTarget.getAttribute('data-id');
    axios.delete(API_URL+'/product/delete/'+id)
      .then(function (response) {
        getProducts();
      })
      .catch(function (error) {
          alert(error);
      });
  }

  const searchProduct = (e) => {
    let keyword = document.getElementById('searchInput').value;
    if (keyword !== null && keyword !== "" && keyword.length > 0) {
      axios.get(API_URL+'/product/search/'+keyword)
      .then(function (response) {
        setProducts(response.data.data);
      })
      .catch(function (error) {
          alert(error);
      });
    } else {
      getProducts();
    }
  }

  useEffect(()=>{
    getProducts();
  },[]);

 
  return (
    <div className="container">
      <div className='row my-5'>
        <div className='col d-flex justify-content-between'>
          <h2>Products List</h2>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" onChange={searchProduct} id="searchInput" />
          </form>
          <Link className="btn btn-primary" aria-current="page" to="/product/add">Add Product</Link>
        </div>
      </div>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
        
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Category</th>
            <th scope="col">Brand</th>
            <th scope="col">Seller</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(products).map((product)=>{
            return(
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.title}</td>
              <td>{product.type}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>{product.seller}</td>
              <td>Rs {product.price}</td>
              <td>{product.rating}</td>
              <td><Link to={'/product/'+product.id} className='btn btn-primary btn-sm mx-1'>Edit</Link><button className='btn btn-danger btn-sm mx-1' data-id={product.id} onClick={deleteProduct}>Delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}
