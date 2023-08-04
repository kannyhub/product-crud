import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct() {
    const API_URL = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const [product,setProduct] = useState({});
    const [categorys, setCategorys] = useState({});
    const [brands, setBrands] = useState({});

    const getCategorys = () => {
        axios.get(API_URL + '/category/all')
        .then(function (response) {
            setCategorys(response.data.data);
        })
        .catch(function (error) {
            alert(error);
        });
    }

    const getBrands = () => {
        axios.get(API_URL + '/brand/all')
        .then(function (response) {
            setBrands(response.data.data);
        })
        .catch(function (error) {
            alert(error);
        });
    }

    const getProduct = () => {
        axios.get(API_URL+'/product/'+id)
        .then(function (response) {
            setProduct(response.data.data);
        })
        .catch(function (error) {
            alert(error);
        });
    }

    const updateProduct = (e) => {
      e.preventDefault();
      axios.put(API_URL+'/product/update/'+id,product)
        .then(function (response) {
           alert(response.data.message);
        })
        .catch(function (error) {
            alert(error);
        });
    }

    const handleInputChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({...values,[name]:value}));
    }

    useEffect(() => {
        getCategorys();
        getBrands();
        getProduct();
    }, []);

  return (
    <div className="container my-5">
      <h2>Edit Product</h2>
      <form>
        <div className='row my-3'>
          <div className="col-md-6">
            <label htmlFor="product_name" className="form-label">Product Name</label>
            <input type="text" className="form-control" name="title" onChange={handleInputChange} value={product.title || ''}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="product_type" className="form-label">Type</label>
            <input type="text" className="form-control" name="type" onChange={handleInputChange} value={product.type || ''}/>
          </div>
        </div>
        <div className='row my-3'>
          <div className="col-md-6">
            <label htmlFor="product_category" className="form-label">Category</label>
            <select value={product.category_id || ''} className="form-select" aria-label="Default select example" name="category_id" onChange={handleInputChange}>
              {
                Array.from(categorys).map((category) => {
                  return (<option key={category.id} value={category.id} >{category.name}</option>)
                })
              }
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="product_brand" className="form-label">Brand</label>
            <select value={product.brand_id || ''} className="form-select" aria-label="Default select example" name="brnad_id" onChange={handleInputChange}>
            {
                Array.from(brands).map((brand) => {
                  return (<option key={brand.id} value={brand.id} >{brand.name}</option>)
                })
            }
            </select>
          </div>
        </div>
        <div className='row my-3'>
          <div className="col-md-4">
            <label htmlFor="product_seller" className="form-label">Seller</label>
            <input type="text" className="form-control" name="seller" onChange={handleInputChange} value={product.seller || ''}/>
          </div>
          <div className="col-md-4">
          <label htmlFor="product_price" className="form-label">Price</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Rs</span>
            <input type="text" className="form-control" name="price" onChange={handleInputChange} value={product.price || ''}/>
          </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="product_rating" className="form-label">Rating</label>
            <input type="text" className="form-control" name="rating" onChange={handleInputChange} value={product.rating || ''}/>
          </div>
        </div>
        <button type='button' onClick={updateProduct} className='btn btn-primary'>Save</button>
      </form>
    </div>
  )
}
