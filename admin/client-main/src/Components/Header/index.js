
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { IoSearch } from 'react-icons/io5';
import Logo from '../../assets/images/logo.png';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <div className="headerWrapper">

      {/* 🔥 Promo Banner */}
      <div className="promo-text text-danger fw-bold text-center py-2">
        🔥 Big Sale! Flat 50% Off on Electronics – Limited Time Offer
      </div>

      {/* LOGO */}
      <div className="col-12 col-md-2 text-center text-md-start mb-2 mb-md-0">
        <Link to="/">
          <img src={Logo} alt="Site Logo" className="logo-img" />
        </Link>
      </div>

      {/* 🧩 Main Header */}
      <div className="main-header py-3 shadow-sm bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            {/* CENTER SECTION */}
            <div className="center-section d-flex align-items-center gap-3 col-md-8">
              <select className="form-select country-dropdown">
                <option value="">Country</option>
                <option value="India">🇮🇳 India</option>
                <option value="USA">🇺🇸 United States</option>
                <option value="UK">🇬🇧 United Kingdom</option>
                <option value="Canada">🇨🇦 Canada</option>
                <option value="Australia">🇦🇺 Australia</option>
                <option value="Germany">🇩🇪 Germany</option>
                <option value="France">🇫🇷 France</option>
                <option value="Japan">🇯🇵 Japan</option>
                <option value="Brazil">🇧🇷 Brazil</option>
                <option value="China">🇨🇳 China</option>
                <option value="UAE">🇦🇪 UAE</option>
                <option value="South Africa">🇿🇦 South Africa</option>
                <option value="Russia">🇷🇺 Russia</option>
                <option value="Italy">🇮🇹 Italy</option>
                <option value="Spain">🇪🇸 Spain</option>
              </select>

              <div className="search-bar d-flex align-items-center flex-grow-1">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="form-control search-input"
                />
                <Button className="search-btn">
                  <IoSearch size={20} />
                </Button>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="right-section d-flex align-items-center gap-4 col-md-4 justify-content-end mt-3 mt-md-0">
              <Link to="/cart">
              <FiShoppingCart size={22} className="icon-hover" />
              </Link>
              <FiHeart size={22} className="icon-hover" />

              <div className="user-login d-flex align-items-center gap-2">
                <img
                  src="https://i.ibb.co/7Ck0rZX/user.png"
                  alt="User"
                  className="user-img"
                />
                <Link to="/Signup" className="login-text">Sign Up</Link>
              </div>

              <Link to="/SignIn">
                <Button variant="outline-primary" className="signin-btn">Sign In</Button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* 🧭 Navigation */}
      <nav>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 d-flex justify-content-between align-items-center flex-wrap navRow">

              {/* Left: All Categories Button */}
              <div className="navPart1">
                <div className="catWrapper">
                  <Button
                    className="allCatTab d-flex align-items-center gap-2"
                    onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
                  >
                    <span className="icon1"><IoIosMenu /></span>
                    <span className="text">ALL CATEGORIES</span>
                    <span className="icon2 ml-2"><FaAngleDown /></span>
                  </Button>
                  <div className={`sidebarNav ${isOpenSidebarVal ? 'open' : ''}`}>
                    <ul className="sidebarMenu">
                      <li className="has-submenu">
                        <Link to="/"><Button className="main-btn">Clothing<FaAngleDown className='ml-auto'/></Button></Link>
                        <ul className="submenu-vertical">
                          <li><Link to="/"><Button>Clothing</Button></Link></li>
                          <li><Link to="/"><Button>FootWear</Button></Link></li>
                          <li><Link to="/"><Button>Watches</Button></Link></li>
                          <li><Link to="/"><Button>Perfumes</Button></Link></li>
                        </ul>
                      </li>

                      <li className="has-submenu">
                        <Link to="/"><Button className="main-btn">FootWear<FaAngleDown className='ml-auto'/></Button></Link>
                        <ul className="submenu-vertical">
                          <li><Link to="/"><Button>Clothing</Button></Link></li>
                          <li><Link to="/"><Button>FootWear</Button></Link></li>
                          <li><Link to="/"><Button>Watches</Button></Link></li>
                          <li><Link to="/"><Button>Perfumes</Button></Link></li>
                        </ul>
                      </li>

                      <li className="has-submenu">
                        <Link to="/"><Button className="main-btn">Watches</Button></Link>
                        <ul className="submenu-vertical">
                          <li><Link to="/"><Button>Clothing</Button></Link></li>
                          <li><Link to="/"><Button>FootWear</Button></Link></li>
                          <li><Link to="/"><Button>Watches</Button></Link></li>
                          <li><Link to="/"><Button>Perfumes</Button></Link></li>
                        </ul>
                      </li>

                      <li className="has-submenu">
                        <Link to="/"><Button className="main-btn">Perfumes</Button></Link>
                        <ul className="submenu-vertical">
                          <li><Link to="/"><Button>Clothing</Button></Link></li>
                          <li><Link to="/"><Button>FootWear</Button></Link></li>
                          <li><Link to="/"><Button>Watches</Button></Link></li>
                          <li><Link to="/"><Button>Perfumes</Button></Link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Nav Items */}
              <div className="navPart2">
                <ul className="nav-list d-flex align-items-center flex-wrap">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/cat/shop">Shop</Link>
                  </li>
                  <li><Link to="/">Bakery</Link>
                    <div className="submenu shadow">
                      <Link to="/"><Button>Cookies</Button></Link>
                      <Link to="/"><Button>Bread</Button></Link>
                      <Link to="/"><Button>Cakes</Button></Link>
                    </div>
                  </li>
                  <li><Link to="/">Electronics</Link>
                    <div className="submenu shadow">
                      <Link to="/"><Button>Phones</Button></Link>
                      <Link to="/"><Button>Laptops</Button></Link>
                      <Link to="/"><Button>Headphones</Button></Link>
                    </div>
                  </li>
                  <li><Link to="/">Cosmetics</Link>
                    <div className="submenu shadow">
                      <Link to="/"><Button>Lipsticks</Button></Link>
                      <Link to="/"><Button>Skincare</Button></Link>
                    </div>
                  </li>
                  <li><Link to="/">Contact Us</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
