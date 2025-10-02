// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import Rating from '@mui/material/Rating';
// import { AiOutlineZoomIn, AiOutlineHeart } from "react-icons/ai";
// import ProductModel from "../../Components/ProductModel";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { fetchDataFromApi } from "../../utils/api";


// // Product Card Component
// const ProductCard = ({ imageUrl, title, discount, price, ratingValue, onZoomClick }) => {
//   const [showIcons, setShowIcons] = useState(false);

//   const handleImageClick = () => {
//     setShowIcons(prev => !prev);
//   };

//   return (
//     <div className="item productItem text-center d-flex flex-column align-items-center">
//       <div
//         className="imgWrapper mb-2 w-100 position-relative"
//         onClick={handleImageClick}
//         style={{ cursor: "pointer" }}
//       >
//         <img src={imageUrl} className="w-100" alt={title} />
//         <div className="discountLabel position-absolute top-0 start-0 bg-danger text-white px-2 py-1">
//           {discount}
//         </div>
//         {/* Like And Zoom In Button */}
//         <div
//           className={`iconOverlay position-absolute top-0 end-0 d-flex flex-column p-2 gap-2 transitionIcons ${showIcons ? "slide-in" : "slide-out"
//             }`}
//         >
//           <AiOutlineHeart className="iconBtn text-white bg-dark p-1 rounded-circle" size={20} title="Like" />
//           <AiOutlineZoomIn
//             className="iconBtn text-white bg-dark p-1 rounded-circle"
//             size={20}
//             title="Zoom In"
//             onClick={onZoomClick}
//           />
//         </div>
//       </div>
//       <h5 className="productTitle mb-1">{title}</h5>
//       <span className="text-success">In Stock</span>
//       <Rating name="read-only" value={ratingValue} readOnly />
//       <p className="productPrice text-muted">{price}</p>
//       <Button variant="dark" size="sm">Add to Cart</Button>
//     </div>
//   );
// };



// // Home Component
// const Home = () => {
//   const [isOpenProductModel, setIsOpenProductModel] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCat, setselectedCat] = useState('fashion');
//   const [value, setValue] = React.useState(0);

//   const [categories, setCategories] = useState([]);
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [setelectronicsData] = useState([]);
//   const [filterData, setFilterData] = useState([]);


//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const openProductModel = (product) => {
//     setSelectedProduct(product);
//     setIsOpenProductModel(true);
//   };

//   const closeProductModel = () => {
//     setIsOpenProductModel(false);
//     setSelectedProduct(null);
//   };

//   const selectCat = (cat) => {
//     setselectedCat(cat);   // ✅ FIXED (no infinite loop)
//   }

//   // ✅ API call for categories and featured products
//   // useEffect(() => {
//   //   fetchDataFromApi("/api/categories").then((res) => {
//   //     if (res && Array.isArray(res.data)) {
//   //       setCategories(res.data);
//   //       if (res.data.length > 0) {
//   //         setselectedCat(res.data[0].name); // ✅ default load
//   //       }
//   //     }
//   //     setActiveCat(res.categoryList)
//   //     console.log(res.categoryList[0]?.name);
//   //   });

//   //   fetchDataFromApi(`/api/products/featured`).then((res) => {
//   //     setFeaturedProducts(res);
//   //   });


//   // }, []);

//   useEffect(()=>{
//   fetchDataFromApi(`/api/products?catName=${selectedCat}`).then((res) => {
//       setFilterData(res);   // ✅ directly use res (array)
//   });
// },[selectedCat])


//   useEffect(() => {
//     // Fetch categories and set the default selected category
//     fetchDataFromApi("/api/categories").then((res) => {
//       if (res?.data && Array.isArray(res.data)) {
//         setCategories(res.data);
//         // Set the first category as the default selection
//         if (res.data.length > 0) {
//           // This will trigger the second useEffect to load products for the first category
//           setselectedCat(res.data[0].name);
//         }
//       }
//     });

//     // This is used for the "NEW PRODUCTS" section, so we keep it
//     fetchDataFromApi(`/api/products/featured`).then((res) => {
//       setFeaturedProducts(res);
//     });

//     // ❗ ADDED: Fetch data for the electronics section
//     fetchDataFromApi(`/api/products?catName=Electronics`).then((res) => {
//       if (res?.products) {
//         setelectronicsData(res.products);
//       }
//     });
//   }, []);
//   return (
//     <>
//       {/* Banner Section */}
//       <div className="homeBannerSection">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           effect="fade"
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
//           navigation={true}
//           modules={[Pagination, Autoplay, Navigation, EffectFade]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <img
//               src="https://cmsimages.shoppersstop.com/Jack_and_Jones_Tommy_and_more_web_2f62a7dc9f/Jack_and_Jones_Tommy_and_more_web_2f62a7dc9f.png"
//               className="w-100"
//               alt="Banner 1"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://cmsimages.shoppersstop.com/casio_web_6a470e70bf/casio_web_6a470e70bf.png"
//               className="w-100"
//               alt="Banner 2"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="https://cmsimages.shoppersstop.com/Puma_web_fd5eb32ca8/Puma_web_fd5eb32ca8.png"
//               className="w-100"
//               alt="Banner 3"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       {/* HOME CATEGORIES */}
//       <section className="homeCat py-4">
//         <div className="container">
//           <div className="info w-75">
//             <h3 className="mb-1">FEATURED CATEGORIES</h3>
//           </div>
//           <Swiper
//             slidesPerView={7}
//             spaceBetween={20}
//             navigation={true}
//             autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
//             modules={[Navigation, Autoplay]}
//             breakpoints={{
//               320: { slidesPerView: 2, spaceBetween: 10 },
//               480: { slidesPerView: 3, spaceBetween: 15 },
//               768: { slidesPerView: 4, spaceBetween: 20 },
//               1024: { slidesPerView: 6, spaceBetween: 25 },
//             }}
//             className="mySwiper"
//           >
//             {categories.map((cat, i) => (
//               <SwiperSlide key={cat._id || i}>
//                 <div className="item text-center">
//                   <img
//                     src={cat.images?.[0] || "https://via.placeholder.com/150"}
//                     alt={cat.name}
//                     style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "10px" }}
//                   />
//                   <h6>{cat.name}</h6>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="homeProducts my-5">
//         <div className="container">
//           <div className="row">
//             {/* Left Image */}
//             <div className="col-md-3">
//               <div className="banner">
//                 <img
//                   src="https://cmsimages.shoppersstop.com/TUMI_Homepage_July25_Web_1cc01bdfd6/TUMI_Homepage_July25_Web_1cc01bdfd6.jpg"
//                   alt="Product"
//                   className="w-100 cursor"
//                 />
//               </div>
//               <div className="banner mt-5">
//                 <img
//                   src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
//                   className="w-100 cursor"
//                   alt="Pro"
//                 />
//               </div>

              
//             </div>

//             {/* Right Product Carousel */}
//             <div className="col-md-9 productRow">
//               {/* BEST SELLERS */}
//               <div className="d-flex align-items-center mb-3">
//                 <div className="info w-75">
//                   <h3 className="mb-0">BEST PRODUCTS</h3>
//                   <p className="text-light text-sml mb-0">
//                     Don't miss the current offers until the end of August.
//                   </p>
//                 </div>
//                 <div className="ml-auto">
//                   <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     variant="scrollable"
//                     scrollButtons="auto"
//                     className="filterTabs"
//                   >
//                     {categories.map((item, index) => (
//                       <Tab
//                         key={index}
//                         label={item.name}
//                         onClick={() => selectCat(item.name)}
//                       />
//                     ))}
//                   </Tabs>


//                 </div>
//               </div>

//               {/* Best Sellers Swiper */}
//               <Swiper
//                 slidesPerView={4}
//                 spaceBetween={25}
//                 navigation={true}
//                 autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
//                 modules={[Navigation, Autoplay]}
//                 breakpoints={{
//                   320: { slidesPerView: 1, spaceBetween: 10 },
//                   480: { slidesPerView: 2, spaceBetween: 15 },
//                   768: { slidesPerView: 3, spaceBetween: 20 },
//                   1024: { slidesPerView: 4, spaceBetween: 25 },
//                 }}
//                 className="mySwiper pt-2 pb-4 px-1"
//               >
//                 {filterData.map((product, idx) => (
//                   <SwiperSlide key={product._id || idx}>
//                     <ProductCard
//                       imageUrl={product.images?.[0] || "https://via.placeholder.com/150"}
//                       title={product.name}
//                       discount={product.oldprice ? `${Math.round(100 - (product.price / product.oldprice) * 100)}% OFF` : ""}
//                       price={`₹${product.price}`}
//                       ratingValue={product.rating}
//                       onZoomClick={() => openProductModel(product)}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               <div className="d-flex align-items-center mt-5">
//                 <div className="info w-75">
//                   <h3 className="mb-0">NEW PRODUCTS</h3>
//                   <p className="text-light text-sml mb-0">All New Updated Products.</p>
//                 </div>
//                 <Button className="viewAllBtn ml-auto">
//                   View All <IoIosArrowRoundForward />
//                 </Button>
//               </div>

//               {/* New Products Swiper */}
//               <Swiper
//                 slidesPerView={4}
//                 spaceBetween={25}
//                 navigation={true}
//                 autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
//                 modules={[Navigation, Autoplay]}
//                 breakpoints={{
//                   320: { slidesPerView: 1, spaceBetween: 10 },
//                   480: { slidesPerView: 2, spaceBetween: 15 },
//                   768: { slidesPerView: 3, spaceBetween: 20 },
//                   1024: { slidesPerView: 4, spaceBetween: 25 },
//                 }}
//                 className="mySwiper pt-2 pb-4 px-1"
//               >
//                 {featuredProducts.map((product, idx) => (
//                   <SwiperSlide key={product._id || idx}>
//                     <ProductCard
//                       imageUrl={product.images?.[0] || "https://via.placeholder.com/150"}
//                       title={product.name}
//                       discount={product.oldprice ? `${Math.round(100 - (product.price / product.oldprice) * 100)}% OFF` : ""}
//                       price={`₹${product.price}`}
//                       ratingValue={product.rating}
//                       onZoomClick={() => openProductModel(product)}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               {/* BANNER */}
//               <div className="d-flex gap-4 mt-4 mb-5">
//                 <div className="position-relative rounded overflow-hidden w-50" style={{ backgroundColor: "#f3f5f6" }}>
//                   <div className="position-absolute top-50 start-0 translate-middle-y p-4 z-2" style={{ maxWidth: "50%" }}>
//                     <p className="text-success fw-bold">WEEKEND DISCOUNT 40%</p>
//                     <h4 className="fw-bold text-dark">Legumes & Cereals</h4>
//                     <p className="text-muted">Feed your family the best</p>
//                     <button className="btn btn-light px-4 py-2" style={{ borderRadius: "20px" }}>Shop Now</button>
//                   </div>
//                   <img
//                     src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"
//                     className="position-relative w-100 h-100 object-fit-cover"
//                     alt="Banner"
//                   />
//                 </div>

//                 <div className="position-relative rounded overflow-hidden w-50" style={{ backgroundColor: "#f3f5f6" }}>
//                   <div className="position-absolute top-50 start-0 translate-middle-y p-4 z-2" style={{ maxWidth: "50%" }}>
//                     <p className="text-success fw-bold">WEEKEND DISCOUNT 40%</p>
//                     <h4 className="fw-bold text-dark">Dairy & Eggs</h4>
//                     <p className="text-muted">A different kind of grocery store</p>
//                     <button className="btn btn-light px-4 py-2" style={{ borderRadius: "20px" }}>Shop Now</button>
//                   </div>
//                   <img
//                     src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"
//                     className="position-relative w-100 h-100 object-fit-cover"
//                     alt="Banner"
//                   />
//                 </div>
//               </div>


            
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Newsletter Section */}
//       <section className="newsLetterSection mt-3 mb-3 d-flex align-item center">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <p className="text-white mb-1">$20 discount for your first order</p>
//               <h3 className="text-white">Join our newsletter and get...</h3>
//               <p className="text-light">
//                 Join our email subscription now to get updates <br /> on promotions and coupons.
//               </p>
//               <form className="d-flex mt-3">
//                 <input
//                   type="email"
//                   className="form-control rounded-0 rounded-start"
//                   placeholder="Your email address"
//                 />
//                 <button className="btn btn-light text-primary rounded-0 rounded-end">
//                   Subscribe
//                 </button>
//               </form>
//             </div>

//             <div className="col-md-6">
//               <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="newsletter" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Zoom Modal */}
//       {isOpenProductModel && (
//         <ProductModel product={selectedProduct} closeProductModel={closeProductModel} />
//       )}
//       {/* You may add <Footer /> if you want */}
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Rating from '@mui/material/Rating';
import { AiOutlineZoomIn, AiOutlineHeart } from "react-icons/ai";
import ProductModel from "../../Components/ProductModel";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { fetchDataFromApi } from "../../utils/api";


// ✅ Helper Function => Unique categories & merge images
const getUniqueCategories = (arr) => {
  const unique = {};
  arr.forEach((item) => {
    if (!unique[item.name]) {
      unique[item.name] = { ...item, images: [...(item.images || [])] };
    } else {
      unique[item.name].images = [
        ...new Set([...(unique[item.name].images || []), ...(item.images || [])])
      ];
    }
  });
  return Object.values(unique);
};


// Product Card Component
const ProductCard = ({ imageUrl, title, discount, price, ratingValue, onZoomClick }) => {
  const [showIcons, setShowIcons] = useState(false);

  const handleImageClick = () => {
    setShowIcons(prev => !prev);
  };

  return (
    <div className="item productItem text-center d-flex flex-column align-items-center">
      <div
        className="imgWrapper mb-2 w-100 position-relative"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      >
        <img src={imageUrl} className="w-100" alt={title} />
        <div className="discountLabel position-absolute top-0 start-0 bg-danger text-white px-2 py-1">
          {discount}
        </div>
        {/* Like And Zoom In Button */}
        <div
          className={`iconOverlay position-absolute top-0 end-0 d-flex flex-column p-2 gap-2 transitionIcons ${showIcons ? "slide-in" : "slide-out"
            }`}
        >
          <AiOutlineHeart className="iconBtn text-white bg-dark p-1 rounded-circle" size={20} title="Like" />
          <AiOutlineZoomIn
            className="iconBtn text-white bg-dark p-1 rounded-circle"
            size={20}
            title="Zoom In"
            onClick={onZoomClick}
          />
        </div>
      </div>
      <h5 className="productTitle mb-1">{title}</h5>
      <span className="text-success">In Stock</span>
      <Rating name="read-only" value={ratingValue} readOnly />
      <p className="productPrice text-muted">{price}</p>
      <Button variant="dark" size="sm">Add to Cart</Button>
    </div>
  );
};



const Home = () => {
  const [isOpenProductModel, setIsOpenProductModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCat, setselectedCat] = useState('fashion');
  const [value, setValue] = React.useState(0);

  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [setelectronicsData] = useState([]);
  const [filterData, setFilterData] = useState([]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openProductModel = (product) => {
    setSelectedProduct(product);
    setIsOpenProductModel(true);
  };

  const closeProductModel = () => {
    setIsOpenProductModel(false);
    setSelectedProduct(null);
  };

  const selectCat = (cat) => {
    setselectedCat(cat);
  }


  useEffect(() => {
    fetchDataFromApi(`/api/products?catName=${selectedCat}`).then((res) => {
      setFilterData(res);
    });
  }, [selectedCat])


  useEffect(() => {
    // Fetch categories and set the default selected category
    fetchDataFromApi("/api/categories").then((res) => {
      if (res?.data && Array.isArray(res.data)) {
        // ✅ Use helper to remove duplicates & merge images
        const uniqueCats = getUniqueCategories(res.data);
        setCategories(uniqueCats);

        if (uniqueCats.length > 0) {
          setselectedCat(uniqueCats[0].name);
        }
      }
    });

    fetchDataFromApi(`/api/products/featured`).then((res) => {
      setFeaturedProducts(res);
    });

    fetchDataFromApi(`/api/products?catName=Electronics`).then((res) => {
      if (res?.products) {
        setelectronicsData(res.products);
      }
    });
  }, []);


  return (
    <>
      {/* ================= Banner Section ================= */}
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://cmsimages.shoppersstop.com/Jack_and_Jones_Tommy_and_more_web_2f62a7dc9f/Jack_and_Jones_Tommy_and_more_web_2f62a7dc9f.png"
              className="w-100"
              alt="Banner 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cmsimages.shoppersstop.com/casio_web_6a470e70bf/casio_web_6a470e70bf.png"
              className="w-100"
              alt="Banner 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cmsimages.shoppersstop.com/Puma_web_fd5eb32ca8/Puma_web_fd5eb32ca8.png"
              className="w-100"
              alt="Banner 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ================= HOME CATEGORIES ================= */}
      <section className="homeCat py-4">
        <div className="container">
          <div className="info w-75">
            <h3 className="mb-1">FEATURED CATEGORIES</h3>
          </div>
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 15 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 25 },
            }}
            className="mySwiper"
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={cat._id || i}>
                <div className="item text-center">
                  <img
                    src={cat.images?.[0] || "https://via.placeholder.com/150"} // ✅ only first image
                    alt={cat.name}
                    style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "10px" }}
                  />
                  <h6>{cat.name}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= Product Section ================= */}
      <section className="homeProducts my-5">
        <div className="container">
          <div className="row">
            {/* Left side banners */}
            <div className="col-md-3">
              <div className="banner">
                <img src="https://cmsimages.shoppersstop.com/TUMI_Homepage_July25_Web_1cc01bdfd6/TUMI_Homepage_July25_Web_1cc01bdfd6.jpg" alt="Product" className="w-100 cursor" />
              </div>
              <div className="banner mt-5">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" className="w-100 cursor" alt="Pro" />
              </div>
            </div>

            {/* Right Product Carousel */}
            <div className="col-md-9 productRow">
              {/* BEST SELLERS */}
              <div className="d-flex align-items-center mb-3">
                <div className="info w-75">
                  <h3 className="mb-0">BEST PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    Don't miss the current offers until the end of August.
                  </p>
                </div>
                <div className="ml-auto">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    className="filterTabs"
                  >
                    {categories.map((item, index) => (
                      <Tab
                        key={index}
                        label={item.name}
                        onClick={() => selectCat(item.name)}
                      />
                    ))}
                  </Tabs>
                </div>
              </div>

              {/* Best Sellers Swiper */}
              <Swiper
                slidesPerView={4}
                spaceBetween={25}
                navigation={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 25 },
                }}
                className="mySwiper pt-2 pb-4 px-1"
              >
                {filterData.map((product, idx) => (
                  <SwiperSlide key={product._id || idx}>
                    <ProductCard
                      imageUrl={product.images?.[0] || "https://via.placeholder.com/150"}
                      title={product.name}
                      discount={product.oldprice ? `${Math.round(100 - (product.price / product.oldprice) * 100)}% OFF` : ""}
                      price={`₹${product.price}`}
                      ratingValue={product.rating}
                      onZoomClick={() => openProductModel(product)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* new products */}
              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">All New Updated Products.</p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <Swiper
                slidesPerView={4}
                spaceBetween={25}
                navigation={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 25 },
                }}
                className="mySwiper pt-2 pb-4 px-1"
              >
                {featuredProducts.map((product, idx) => (
                  <SwiperSlide key={product._id || idx}>
                    <ProductCard
                      imageUrl={product.images?.[0] || "https://via.placeholder.com/150"}
                      title={product.name}
                      discount={product.oldprice ? `${Math.round(100 - (product.price / product.oldprice) * 100)}% OFF` : ""}
                      price={`₹${product.price}`}
                      ratingValue={product.rating}
                      onZoomClick={() => openProductModel(product)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>


              {/* BANNERS */}
              <div className="d-flex gap-4 mt-4 mb-5">
                <div className="position-relative rounded overflow-hidden w-50" style={{ backgroundColor: "#f3f5f6" }}>
                  <div className="position-absolute top-50 start-0 translate-middle-y p-4 z-2" style={{ maxWidth: "50%" }}>
                    <p className="text-success fw-bold">WEEKEND DISCOUNT 40%</p>
                    <h4 className="fw-bold text-dark">Legumes & Cereals</h4>
                    <p className="text-muted">Feed your family the best</p>
                    <button className="btn btn-light px-4 py-2" style={{ borderRadius: "20px" }}>Shop Now</button>
                  </div>
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg" className="position-relative w-100 h-100 object-fit-cover" alt="Banner" />
                </div>

                <div className="position-relative rounded overflow-hidden w-50" style={{ backgroundColor: "#f3f5f6" }}>
                  <div className="position-absolute top-50 start-0 translate-middle-y p-4 z-2" style={{ maxWidth: "50%" }}>
                    <p className="text-success fw-bold">WEEKEND DISCOUNT 40%</p>
                    <h4 className="fw-bold text-dark">Dairy & Eggs</h4>
                    <p className="text-muted">A different kind of grocery store</p>
                    <button className="btn btn-light px-4 py-2" style={{ borderRadius: "20px" }}>Shop Now</button>
                  </div>
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg" className="position-relative w-100 h-100 object-fit-cover" alt="Banner" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsLetterSection mt-3 mb-3 d-flex align-item center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order</p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates <br /> on promotions and coupons.
              </p>
              <form className="d-flex mt-3">
                <input type="email" className="form-control rounded-0 rounded-start" placeholder="Your email address" />
                <button className="btn btn-light text-primary rounded-0 rounded-end">Subscribe</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="newsletter" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Zoom Modal */}
      {isOpenProductModel && (
        <ProductModel product={selectedProduct} closeProductModel={closeProductModel} />
      )}
    </>
  );
};

export default Home;