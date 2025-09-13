

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ProductCard Component
const ProductCard = ({ imageUrl, title, discount, price, ratingValue, onZoomClick }) => {
  const [showIcons, setShowIcons] = useState(false);

  const handleImageClick = () => {
    setShowIcons(prev => !prev);
  };

  return (
    <div className="product-card" onClick={handleImageClick}>
      <img src={imageUrl} alt={title} className="w-100" />
      <div className="product-details p-2">
        <h5>{title}</h5>
        <p className="text-muted mb-1">{discount}</p>
        <p className="fw-bold">{price}</p>
        {/* Optional: Add rating and zoom icons */}
      </div>
    </div>
  );
};

// RelatedProducts Component
const RelatedProducts = () => {
  const [ratingValue] = useState(4);
  const [isOpenProductModel, setIsOpenProductModel] = useState(false);

  const openProductModel = () => {
    setIsOpenProductModel(true);
  };

  const closeProductModel = () => {
    setIsOpenProductModel(false);
  };

  return (
    <>
      <div className="col-md-9 productRow mt-3">
        {/* BEST SELLERS */}
        <div className="d-flex align-items-center mb-3">
          <div className="info w-75">
            <h3 className="mb-0">Related Products</h3>
          </div>
          <Button className="viewAllBtn ml-auto">
            View All <IoIosArrowRoundForward />
          </Button>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={15}
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
          {["Cashew", "Cashew", "Cashew", "Cashew"].map((title, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                imageUrl="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-8-346x310.jpg"
                title={title}
                discount="28% OFF"
                price="₹999"
                ratingValue={ratingValue}
                onZoomClick={openProductModel}
              />
              <Button variant="dark">Add to Cart</Button>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </>
  );
};

export default RelatedProducts;
