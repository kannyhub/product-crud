import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function Category() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [categorys,setCategorys] = useState({});
    const [loading,setLoading] = useState(true);

    const getCategorys = () => {
        axios.get(API_URL+'/category/all')
        .then(function (response) {
            setCategorys(response.data.data);
            setLoading(false)
        })
        .catch(function (error) {
            alert(error);
        });
    }

    useEffect(()=>{
        getCategorys();
      },[]);
    return(
        <div className="container">
            <div className='row my-5'>
                <div className='col d-flex justify-content-between'>
                    <h2>Categories List</h2>
                    <Link className="btn btn-primary" aria-current="page" to="/category/add">Add Category</Link>
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
                    <th scope="col">Category Name</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {Array.from(categorys).map((category)=>{
                    return(
                    <tr key={category.id}>
                        <th scope="row">{category.id}</th>
                        <td>{category.name}</td>
                        <td><Link to={'/category/'+category.id} className='btn btn-primary btn-sm mx-1'>Edit</Link><button className='btn btn-danger btn-sm mx-1' data-id={category.id} >Delete</button></td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}