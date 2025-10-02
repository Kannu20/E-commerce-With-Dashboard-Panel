// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { IoSearch } from 'react-icons/io5';
// import Logo from '../../assets/images/Gemini_Generated_Image_blxp8qblxp8qblxp.png'; // Make sure this path is correct
// import { FiHeart, FiShoppingCart } from 'react-icons/fi';
// import { IoIosMenu } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa6";

// const Header = () => {
//   const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

//   return (
//     <div className="headerWrapper">

//       {/* 🔥 Promo Banner */}
//       <div className="promo-text text-danger fw-bold text-center py-2">
//         🔥 Big Sale! Flat 50% Off on Electronics – Limited Time Offer
//       </div>

//       {/* 🧩 Main Header - Corrected with Flexbox for proper alignment */}
//       <div className="main-header py-3 shadow-sm bg-white">
//         <div className="container">
//           {/* Using d-flex for single-line alignment */}
//           <div className="d-flex justify-content-between align-items-center gap-4">

//             {/* LOGO */}
//             <div className="header-logo">
//               <Link to="/">
//                 <img src={Logo} alt="Site Logo" className="logo-img" style={{ height: '120px', width: '220px', marginLeft: '-80px' }} />
//               </Link>
//             </div>

//             {/* CENTER SECTION - Takes remaining space */}
//             <div className="header-search flex-grow-1 d-flex align-items-center">
//               <select className="form-select country-dropdown" style={{ maxWidth: '130px', marginLeft: '-40px' }}>
//                 <option value="">Country</option>
//                 <option value="India">🇮🇳 India</option>
//                 <option value="USA">🇺🇸 United States</option>
//                 <option value="Canada">🇨🇦 Canada</option>
//                 <option value="Australia">🇦🇺 Australia</option>
//                 <option value="Germany">🇩🇪 Germany</option>
//                 <option value="France">🇫🇷 France</option>
//                 <option value="Japan">🇯🇵 Japan</option>
//                 <option value="Brazil">🇧🇷 Brazil</option>
//                 <option value="China">🇨🇳 China</option>
//                 <option value="UAE">🇦🇪 UAE</option>
//                 <option value="South Africa">🇿🇦 South Africa</option>
//                 <option value="Russia">🇷🇺 Russia</option>
//                 <option value="Italy">🇮🇹 Italy</option>
//                 <option value="Spain">🇪🇸 Spain</option>
//                 {/* ... other countries */}
//               </select>

//               <div className="input-group ms-2">
//                 <input
//                   type="text"
//                   placeholder="Search for products..."
//                   className="form-control search-input"
//                 />
//                 <Button className="search-btn" variant="primary">
//                   <IoSearch size={20} />
//                 </Button>
//               </div>
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="header-actions d-flex align-items-center gap-3">
//               <Link to="/cart" className="text-dark">
//                 <FiShoppingCart size={24} className="icon-hover" />
//               </Link>
//               <Link to="/wishlist" className="text-dark">
//                 <FiHeart size={24} className="icon-hover" />
//               </Link>

//               {/* User icon can be made a link or button */}
//               <Link to="/profile" className="text-dark">
//                 <img
//                   src="https://i.ibb.co/7Ck0rZX/user.png" // Using a placeholder user icon
//                   alt="User"
//                   style={{ height: '30px', width: '30px', borderRadius: '50%' }}
//                 />
//               </Link>

//               <Link to="/Signup">
//                 <Button variant="primary">Sign Up</Button>
//               </Link>

//               <Link to="/SignIn">
//                 <Button variant="outline-primary">Sign In</Button>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* 🧭 Navigation (No changes needed here) */}
//       <nav>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-12 d-flex justify-content-between align-items-center flex-wrap navRow">

//               {/* Left: All Categories Button */}
//               <div className="navPart1">
//                 <div className="catWrapper">
//                   <Button
//                     className="allCatTab d-flex align-items-center gap-2"
//                     onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
//                   >
//                     <span className="icon1"><IoIosMenu /></span>
//                     <span className="text">ALL CATEGORIES</span>
//                     <span className="icon2 ml-2"><FaAngleDown /></span>
//                   </Button>
//                   <div className={`sidebarNav ${isOpenSidebarVal ? 'open' : ''}`}>
//                     <ul className="sidebarMenu">
//                       <li className="has-submenu">
//                         <Link to="/"><Button className="main-btn">Clothing<FaAngleDown className='ml-auto' /></Button></Link>
//                         <ul className="submenu-vertical">
//                           <li><Link to="/"><Button>Clothing</Button></Link></li>
//                           <li><Link to="/"><Button>FootWear</Button></Link></li>
//                           <li><Link to="/"><Button>Watches</Button></Link></li>
//                           <li><Link to="/"><Button>Perfumes</Button></Link></li>
//                         </ul>
//                       </li>

//                       <li className="has-submenu">
//                         <Link to="/"><Button className="main-btn">FootWear<FaAngleDown className='ml-auto' /></Button></Link>
//                         <ul className="submenu-vertical">
//                           <li><Link to="/"><Button>Clothing</Button></Link></li>
//                           <li><Link to="/"><Button>FootWear</Button></Link></li>
//                           <li><Link to="/"><Button>Watches</Button></Link></li>
//                           <li><Link to="/"><Button>Perfumes</Button></Link></li>
//                         </ul>
//                       </li>

//                       <li className="has-submenu">
//                         <Link to="/"><Button className="main-btn">Watches</Button></Link>
//                         <ul className="submenu-vertical">
//                           <li><Link to="/"><Button>Clothing</Button></Link></li>
//                           <li><Link to="/"><Button>FootWear</Button></Link></li>
//                           <li><Link to="/"><Button>Watches</Button></Link></li>
//                           <li><Link to="/"><Button>Perfumes</Button></Link></li>
//                         </ul>
//                       </li>

//                       <li className="has-submenu">
//                         <Link to="/"><Button className="main-btn">Perfumes</Button></Link>
//                         <ul className="submenu-vertical">
//                           <li><Link to="/"><Button>Clothing</Button></Link></li>
//                           <li><Link to="/"><Button>FootWear</Button></Link></li>
//                           <li><Link to="/"><Button>Watches</Button></Link></li>
//                           <li><Link to="/"><Button>Perfumes</Button></Link></li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Right: Nav Items */}
//               <div className="navPart2">
//                 <ul className="nav-list d-flex align-items-center flex-wrap">
//                   <li><Link to="/">Home</Link></li>
//                   <li><Link to="/cat/shop">Shop</Link>
//                   </li>
//                   <li><Link to="/">Bakery</Link>
//                     <div className="submenu shadow">
//                       <Link to="/"><Button>Cookies</Button></Link>
//                       <Link to="/"><Button>Bread</Button></Link>
//                       <Link to="/"><Button>Cakes</Button></Link>
//                     </div>
//                   </li>
//                   <li><Link to="/">Electronics</Link>
//                     <div className="submenu shadow">
//                       <Link to="/"><Button>Phones</Button></Link>
//                       <Link to="/"><Button>Laptops</Button></Link>
//                       <Link to="/"><Button>Headphones</Button></Link>
//                     </div>
//                   </li>
//                   <li><Link to="/">Cosmetics</Link>
//                     <div className="submenu shadow">
//                       <Link to="/"><Button>Lipsticks</Button></Link>
//                       <Link to="/"><Button>Skincare</Button></Link>
//                     </div>
//                   </li>
//                   <li><Link to="/">Contact Us</Link></li>
//                 </ul>
//               </div>

//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { IoSearch } from 'react-icons/io5';
import Logo from '../../assets/images/Gemini_Generated_Image_blxp8qblxp8qblxp.png'; 
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { fetchDataFromApi } from "../../utils/api";   // ✅ use same util function

const Header = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
  const [categories, setCategories] = useState([]);

  // ✅ Fetch categories with subCategories from backend
  useEffect(() => {
    fetchDataFromApi("/api/categories")
      .then((res) => {
        if (res && res.data) {
          // Merge unique categories by name if needed
          const mergedCategories = {};
          res.data.forEach(cat => {
            if (!mergedCategories[cat.name]) {
              mergedCategories[cat.name] = {
                _id: cat._id,
                name: cat.name,
                subCategory: [...(cat.subCategory || [])],
              };
            } else {
              mergedCategories[cat.name].subCategory = [
                ...new Set([
                  ...mergedCategories[cat.name].subCategory,
                  ...(cat.subCategory || [])
                ])
              ];
            }
          });
          setCategories(Object.values(mergedCategories));
        }
      })
      .catch((err) => console.error("❌ Error fetching categories:", err));
  }, []);

  return (
    <div className="headerWrapper">
      {/* 🔥 Promo Banner */}
      <div className="promo-text text-danger fw-bold text-center py-2">
        🔥 Big Sale! Flat 50% Off on Electronics – Limited Time Offer
      </div>

      {/* Main Header */}
      <div className="main-header py-3 shadow-sm bg-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center gap-4">

            {/* LOGO */}
            <div className="header-logo">
              <Link to="/">
                <img src={Logo} alt="Site Logo" className="logo-img" style={{ height: '120px', width: '220px', marginLeft: '-80px' }} />
              </Link>
            </div>

            {/* Search */}
            <div className="header-search flex-grow-1 d-flex align-items-center">
              <select className="form-select country-dropdown" style={{ maxWidth: '130px', marginLeft: '-40px' }}>
                <option value="">Country</option>
                <option value="India">🇮🇳 India</option>
                <option value="USA">🇺🇸 United States</option>
                {/* aur countries */}
              </select>
              <div className="input-group ms-2">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="form-control search-input"
                />
                <Button className="search-btn" variant="primary">
                  <IoSearch size={20} />
                </Button>
              </div>
            </div>

            {/* Right Section */}
            <div className="header-actions d-flex align-items-center gap-3">
              <Link to="/cart" className="text-dark"><FiShoppingCart size={24} /></Link>
              <Link to="/wishlist" className="text-dark"><FiHeart size={24} /></Link>
              <Link to="/profile" className="text-dark">
                <img src="https://i.ibb.co/7Ck0rZX/user.png" alt="User" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
              </Link>
              <Link to="/Signup"><Button variant="primary">Sign Up</Button></Link>
              <Link to="/SignIn"><Button variant="outline-primary">Sign In</Button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* 🧭 Navigation - Dynamic Categories */}
      <nav>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 d-flex justify-content-between align-items-center flex-wrap navRow">

              {/* Sidebar All Categories */}
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
                      {categories.map((cat) => (
                        <li key={cat._id} className={`${cat.subCategory?.length ? "has-submenu" : ""}`}>
                          <Link to={`/category/${cat.name}`}>
                            <Button className="main-btn">
                              {cat.name} {cat.subCategory?.length > 0 && <FaAngleDown className="ml-auto" />}
                            </Button>
                          </Link>

                          {cat.subCategory?.length > 0 && (
                            <ul className="submenu-vertical">
                              {cat.subCategory.map((sub, idx) => (
                                <li key={idx}>
                                  <Link to={`/category/${cat.name}/${sub}`}>
                                    <Button>{sub}</Button>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Nav Items */}
              <div className="navPart2">
                <ul className="nav-list d-flex align-items-center flex-wrap">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/cat/shop">Shop</Link></li>
                  <li><Link to="/FAQs">FAQs</Link></li>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
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