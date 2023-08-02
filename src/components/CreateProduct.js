import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CreateProduct(props) {
  const [categorys, setCategorys] = useState({});
  const [brands, setBrands] = useState({});

  const getCategorys = () => {
    axios.get(props.API_URL + '/category/all')
      .then(function (response) {
        console.log(response.data)
        setCategorys(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getBrands = () => {
    axios.get(props.API_URL + '/brand/all')
      .then(function (response) {
        console.log(response.data)
        setBrands(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getCategorys();
    getBrands();
  }, []);
  return (
    <div className="container my-5">
      <h2>Add Product</h2>
      <form>
        <div className='row my-3'>
          <div className="col-md-6">
            <label htmlFor="product_name" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="product_name"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="product_type" className="form-label">Type</label>
            <input type="text" className="form-control" id="product_type"/>
          </div>
        </div>
        <div className='row my-3'>
          <div className="col-md-6">
            <label htmlFor="product_category" className="form-label">Category</label>
            <select className="form-select" aria-label="Default select example">
              {
                Array.from(categorys).map((category) => {
                  return (<option key={category.id} value={category.id}>{category.name}</option>)
                })
              }
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="product_brand" className="form-label">Brand</label>
            <select className="form-select" aria-label="Default select example">
            {
                Array.from(brands).map((brand) => {
                  return (<option key={brand.id} value={brand.id}>{brand.name}</option>)
                })
              }
            </select>
          </div>
        </div>
        <div className='row my-3'>
          <div className="col-md-4">
            <label htmlFor="product_seller" className="form-label">Seller</label>
            <input type="text" className="form-control" id="product_seller"/>
          </div>
          <div className="col-md-4">
          <label htmlFor="product_price" className="form-label">Price</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Rs</span>
            <input type="text" className="form-control" id="product_price"/>
          </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="product_rating" className="form-label">Rating</label>
            <input type="text" className="form-control" id="product_rating"/>
          </div>
        </div>
        <button className='btn btn-primary'>Save</button>
      </form>
    </div>
  )
}
