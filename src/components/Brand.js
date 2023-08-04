import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Brand() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [brands,setBrands] = useState({});
  const [loading,setLoading] = useState(true);

  const getBrands = () => {
    axios.get(API_URL+'/brand/all')
      .then(function (response) {
        setBrands(response.data.data);
        setLoading(false)
      })
      .catch(function (error) {
          alert(error);
      });
  }

  useEffect(()=>{
    getBrands();
  },[]);
  return (
    <div className="container">
      <div className='row my-5'>
        <div className='col d-flex justify-content-between'>
          <h2>Brands List</h2>
          <Link className="btn btn-primary" aria-current="page" to="/brand/add">Add Brand</Link>
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
            <th scope="col">Brand Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(brands).map((brand)=>{
            return(
            <tr key={brand.id}>
              <th scope="row">{brand.id}</th>
              <td>{brand.name}</td>
              <td><Link to={'/brand/'+brand.id} className='btn btn-primary btn-sm mx-1'>Edit</Link><button className='btn btn-danger btn-sm mx-1' data-id={brand.id} >Delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}