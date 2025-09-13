import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from '@mui/material/Rating';
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import Footer from "../../Components/Footer";
import ProductModel from "../../Components/ProductModel";

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

// Home Component
const Home = () => {
  const [ratingValue] = useState(4);
  const [isOpenProductModel, setIsOpenProductModel] = useState(false);

  const openProductModel = () => {
    setIsOpenProductModel(true);
  };
 
  const closeProductModel=()=>{
    setIsOpenProductModel(false);
  }

  return (
    <>
      {/* Banner Section */}
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
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

      {/* HOME CATEGORIES */}
      <section className="homeCat py-4">
        <div className="container">
          <div className="info w-75">
            <h3 className="mb-1">FEATURED CATEGORIES</h3>
          </div>
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 15 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 25 },
            }}
            className="mySwiper"
          >
            {Array(6).fill().map((_, i) => (
              <SwiperSlide key={i}>
                <div className="item text-center">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg" style={{ width: "100%", borderRadius: "10px" }} />
                  <h6>Beverage</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Product Section */}
      <section className="homeProducts my-5">
        <div className="container">
          <div className="row">
            {/* Left Image */}
            <div className="col-md-3">
              <div className="banner">
                <img
                  src="https://cmsimages.shoppersstop.com/TUMI_Homepage_July25_Web_1cc01bdfd6/TUMI_Homepage_July25_Web_1cc01bdfd6.jpg"
                  alt="Product"
                  className="w-100 cursor"
                />
              </div>
              <div className="banner mt-5">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
                  className="w-100 cursor"
                />
              </div>
            </div>

            {/* Right Product Carousel */}
            <div className="col-md-9 productRow">
              {/* BEST SELLERS */}
              <div className="d-flex align-items-center mb-3">
                <div className="info w-75">
                  <h3 className="mb-0">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Don't miss the current offers until the end of August.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <Swiper
                slidesPerView={4}
                spaceBetween={25}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 25 },
                }}
                className="mySwiper pt-2 pb-4 px-1"
              >
                {["Adidas Shoes", "Nike Sneakers", "Puma Trainers", "Vans Classic"].map((title, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard
                      imageUrl="https://cmsimages.shoppersstop.com/Adidasweb_3bc7f319cf/Adidasweb_3bc7f319cf.png"
                      title={title}
                      discount="28% OFF"
                      price="₹3,999"
                      ratingValue={ratingValue}
                      onZoomClick={openProductModel}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* NEW PRODUCTS */}
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
                modules={[Navigation]}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 25 },
                }}
                className="mySwiper pt-2 pb-4 px-1"
              >
                {["New Adidas", "New Nike", "New Puma", "New Vans"].map((title, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard
                      imageUrl="https://cmsimages.shoppersstop.com/Adidasweb_3bc7f319cf/Adidasweb_3bc7f319cf.png"
                      title={title}
                      discount="22% OFF"
                      price="₹3,499"
                      ratingValue={ratingValue}
                      onZoomClick={openProductModel}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Banners */}
              <div className="d-flex gap-4 mt-4 mb-5">
                <div className="position-relative rounded overflow-hidden w-50" style={{ backgroundColor: "#f3f5f6" }}>
                  <div className="position-absolute top-50 start-0 translate-middle-y p-4 z-2" style={{ maxWidth: "50%" }}>
                    <p className="text-success fw-bold">WEEKEND DISCOUNT 40%</p>
                    <h4 className="fw-bold text-dark">Legumes & Cereals</h4>
                    <p className="text-muted">Feed your family the best</p>
                    <button className="btn btn-light px-4 py-2" style={{ borderRadius: "20px" }}>Shop Now</button>
                  </div>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"
                    className="position-relative w-100 h-100 object-fit-cover"
                    alt="Banner"
                  />
                </div>

                <div className="position-relative rounded overflow-hidden w-50" style={{ backgroundColor: "#f3f5f6" }}>
                  <div className="position-absolute top-50 start-0 translate-middle-y p-4 z-2" style={{ maxWidth: "50%" }}>
                    <p className="text-success fw-bold">WEEKEND DISCOUNT 40%</p>
                    <h4 className="fw-bold text-dark">Dairy & Eggs</h4>
                    <p className="text-muted">A different kind of grocery store</p>
                    <button className="btn btn-light px-4 py-2" style={{ borderRadius: "20px" }}>Shop Now</button>
                  </div>
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"
                    className="position-relative w-100 h-100 object-fit-cover"
                    alt="Banner"
                  />
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
                <input
                  type="email"
                  className="form-control rounded-0 rounded-start"
                  placeholder="Your email address"
                />
                <button className="btn btn-light text-primary rounded-0 rounded-end">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="col-md-6">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="newsletter" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Zoom Modal */}
      {isOpenProductModel && <ProductModel closeProductModel={closeProductModel}/>}
    </>
  );
};

export default Home;
