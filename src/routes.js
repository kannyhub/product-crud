import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Brand from "./components/Brand.js";
import Category from "./components/Category.js";

export default function routes() {
    // const API_URL = 'http://127.0.0.1:8000/api';
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="product/add" element={<CreateProduct/>}></Route>
            <Route path="/product/:id" element={<EditProduct/>}></Route>
            <Route path="/brands" element={<Brand/>}></Route>
            <Route path="/categories" element={<Category/>}></Route>
        </Routes> 
    </BrowserRouter>
  )
}
