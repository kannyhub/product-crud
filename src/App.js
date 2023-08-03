import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Home from './components/Home.js';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Brand from "./components/Brand.js";
import Category from "./components/Category.js";

function App() {
  const API_URL = 'http://127.0.0.1:8000/api';
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home API_URL={API_URL}/>}></Route>
        <Route path="product/add" element={<CreateProduct API_URL={API_URL}/>}></Route>
        <Route path="/product/:id" element={<EditProduct API_URL={API_URL}/>}></Route>
        <Route path="/brands" element={<Brand API_URL={API_URL}/>}></Route>
        <Route path="/categories" element={<Category API_URL={API_URL}/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
