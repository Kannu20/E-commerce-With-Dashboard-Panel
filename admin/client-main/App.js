import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';   
import Listing from './Pages/Listing';   
import Header from './Components/Header'; 
import './App.css';
import Footer from './Components/Footer';
import Cart from './Pages/Cart/Index';
import ProductDetails from './Pages/ProductDetails';
import SignIn from './Pages/SignIn';
import Signup from './Pages/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/cat/:id" exact={true} element={<Listing />} />
        <Route path="/product/:id" exact={true} element={<ProductDetails />} />
        <Route path="/cart" exact={true} element={<Cart />} />
        <Route path="/signIn" exact={true} element={<SignIn/>} />
        <Route path="/signup" exact={true} element={<Signup/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
