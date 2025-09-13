
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './responsive.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Dashboard/Login';
import SignUp from './pages/SignUp'; 
import ProductDetails from './pages/ProductDetails';
import Product from './pages/Products';
import ProductUpload from './pages/ProductUpload';
import CategoryAdd from './pages/CategoryAdd';
import Category from './pages/Category';
const MyContext = createContext();

function App() {
  const [isToggelSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') === 'light' ? true : false
  );

  useEffect(() => {
    if (themeMode) {
      // Light mode
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    } else {
      // Dark mode
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  }, [themeMode]);
  const values = {
    isToggelSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    setThemeMode,
    themeMode,
    setisHideSidebarAndHeader,
    isHideSidebarAndHeader
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
        isHideSidebarAndHeader !== true &&

        <Header />
        }
        <div className='main d-flex'>
          {
            isHideSidebarAndHeader !== true &&

          <div className={`sidebarWrapper ${isToggelSidebar ? 'toggle' : ''}`}>
            <Sidebar />
          </div>
          }

          <div className='content'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/product/details" element={<ProductDetails />} />
              <Route path="product" element={<Product />} />
              <Route path="product" element={<Product />} />
              <Route path="category" element={<Category />} />
              <Route path="productUpload" element={<ProductUpload />} />
              <Route path="categoryAdd" element={<CategoryAdd />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
