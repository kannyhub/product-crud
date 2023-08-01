import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home(props) {
  const [products,setProducts] = useState({});
  const [loading,setLoading] = useState(true);
  const getProducts = ()=>{
    axios.get(props.API_URL+'/products')
      .then(function (response) {
          setProducts(response.data.result);
          setLoading(false)
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  useEffect(()=>{
    getProducts();
  },[]);

 
  return (
    <div className="container">
      <div className='row m-5'>
        <div className='col d-flex justify-content-between'>
          <h2>products List</h2>
          <a href="/create" className='btn btn-primary btn-sm'>Add</a>
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
          {Array.from(products).map((elem)=>{
            return(
            <tr key={elem.id}>
              <th scope="row">{elem.id}</th>
              <td>{elem.title}</td>
              <td>{elem.type}</td>
              <td>{elem.category}</td>
              <td>{elem.brand}</td>
              <td>{elem.seller}</td>
              <td>Rs {elem.price}</td>
              <td>{elem.rating}</td>
              <td><a href="/" className='btn btn-primary btn-sm mx-1'>Edit</a><button className='btn btn-danger btn-sm mx-1'>Delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}
