import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    FaTag, FaCube, FaPalette, FaRulerCombined, FaDollarSign, FaBoxOpen,
    FaStar, FaCalendarAlt, FaReply, FaTshirt
} from "react-icons/fa";


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
      cursor: 'pointer',
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.grey[400],
    },
  };
});

const ProductDetails = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [nav1, setNav1] = React.useState(null);
    const [nav2, setNav2] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const mainSliderSettings = {
        dots: false, infinite: true, speed: 500,
        slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true,
        asNavFor: nav2
    };

    const thumbSliderSettings = {
        dots: false, infinite: true, speed: 500,
        slidesToShow: 4, slidesToScroll: 1, focusOnSelect: true, arrows: false,
        asNavFor: nav1
    };

    const images = [
        "https://mironcoder-hotash.netlify.app/images/product/single/01.webp",
        "https://mironcoder-hotash.netlify.app/images/product/single/02.webp",
        "https://mironcoder-hotash.netlify.app/images/product/single/03.webp",
        "https://mironcoder-hotash.netlify.app/images/product/single/04.webp",
        "https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
    ];

    return (
        <div className="right-content w-100">
            {/* Top Breadcrumb Section */}
            <div className="card shadow border-0 w-95 flex-row p-4 align-items-center">
                <h5 className="mb-0">Product View</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb component="a" href="#" label="Dashboard" icon={<HomeIcon fontSize="small" />} />
                    <StyledBreadcrumb label="Products" deleteIcon={<ExpandMoreIcon />} onClick={handleClick} />
                    <StyledBreadcrumb label="Products View" deleteIcon={<ExpandMoreIcon />} onClick={handleClick} />
                </Breadcrumbs>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>All Products</MenuItem>
                    <MenuItem onClick={handleClose}>Add Product</MenuItem>
                    <MenuItem onClick={handleClose}>Categories</MenuItem>
                </Menu>
            </div>

            {/* Product Image and Info */}
            <div className="card p-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="sliderWrapper">
                            <Slider {...mainSliderSettings} ref={setNav1} className="sliderBig">
                                {images.map((img, i) => (
                                    <div key={i}><img src={img} alt={`product-${i}`} className="w-100" /></div>
                                ))}
                            </Slider>
                            <Slider {...thumbSliderSettings} ref={setNav2} className="sliderSml">
                                {images.map((img, i) => (
                                    <div key={i} className="px-1"><img src={img} alt={`thumb-${i}`} className="w-100 border" /></div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="product-details-card">
                            <h3 className="product-details-title">Product Details</h3>
                            <h2 className="product-main-title">
                                Formal suits for men wedding slim fit 3 piece dress business party jacket
                            </h2>

                            <ul className="product-info-list">
                                <li><FaTshirt className="icon" /> <span>Brand</span>: Ecstasy</li>
                                <li><FaCube className="icon" /> <span>Category</span>: Man's</li>
                                <li>
                                    <FaTag className="icon" /> <span>Tags</span>:
                                    {["SUITE", "PARTY", "DRESS", "SMART", "MAN", "STYLES"].map(tag => (
                                        <span className="tag" key={tag}>{tag}</span>
                                    ))}
                                </li>
                                <li>
                                    <FaPalette className="icon" /> <span>Color</span>:
                                    {["RED", "BLUE", "GREEN", "YELLOW", "PURPLE"].map(color => (
                                        <span className="color-tag" key={color}>{color}</span>
                                    ))}
                                </li>
                                <li>
                                    <FaRulerCombined className="icon" /> <span>Size</span>:
                                    {["SM", "MD", "LG", "XL", "XXL"].map(size => (
                                        <span className="size-tag" key={size}>{size}</span>
                                    ))}
                                </li>
                                <li><FaDollarSign className="icon" /> <span>Price</span>: <span className="price-new">$37.00</span> <span className="price-old">$42.00</span></li>
                                <li><FaBoxOpen className="icon" /> <span>Stock</span>: (68) Piece</li>
                                <li><FaStar className="icon" /> <span>Review</span>: (03) Review</li>
                                <li><FaCalendarAlt className="icon" /> <span>Published</span>: 02 Feb 2020</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                <div className="p-4">
                    <h5 className="mt-4">Product Description</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate...</p>
                </div>

                {/* Ratings & Reviews */}
                <div className="rating-review-container">
                    {/* Rating Analytics */}
                    <div className="rating-analytics">
                        <h4>Rating Analytics</h4>
                        <div className="rating-stats">
                            <div className="rating-bars">
                                {[
                                    { star: "5 Star", count: 22 },
                                    { star: "4 Star", count: 6 },
                                    { star: "3 Star", count: 5 },
                                    { star: "2 Star", count: 3 },
                                    { star: "1 Star", count: 2 }
                                ].map((item, index) => (
                                    <div className="rating-bar" key={index}>
                                        <span>{item.star}</span>
                                        <div className="progress">
                                            <div
                                                className="progress-fill"
                                                style={{
                                                    width: `${(item.count / 22) * 100}%`
                                                }}
                                            ></div>
                                        </div>
                                        <span className="count">({item.count < 10 ? `0${item.count}` : item.count})</span>
                                    </div>
                                ))}
                            </div>

                            <div className="rating-summary">
                                <p>Total Review (38)</p>
                                <h1>4.9</h1>
                                <div className="stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{ color: "#ffc107" }} />
                                </div>
                                <p>Your Average Rating Star</p>
                            </div>
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <div className="customer-reviews">
                        <h4>Customer_reviews</h4>
                        <div className="review-card">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="user"
                                className="review-avatar"
                            />
                            <div className="review-content">
                                <div className="review-header">
                                    <div>
                                        <h5>Kartik</h5>
                                        <span className="time">25 minutes ago!</span>
                                    </div>
                                    <button className="reply-btn"><FaReply /> REPLY</button>
                                </div>
                                <div className="Goldstars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{ color: "#ffc107" }} />
                                </div>
                                <p className="review-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore
                                    fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima,
                                    adipisci natus quod magni omnis quas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="customer-reviews">
                        <div className="review-card">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="user"
                                className="review-avatar"
                            />
                            <div className="review-content">
                                <div className="review-header">
                                    <div>
                                        <h5>Kanishak</h5>
                                        <span className="time">25 minutes ago!</span>
                                    </div>
                                    <button className="reply-btn"><FaReply /> REPLY</button>
                                </div>
                                <div className="Goldstars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{ color: "#ffc107" }} />
                                </div>
                                <p className="review-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore
                                    fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima,
                                    adipisci natus quod magni omnis quas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="customer-reviews">

                        <div className="review-card">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="user"
                                className="review-avatar"
                            />
                            <div className="review-content">
                                <div className="review-header">
                                    <div>
                                        <h5>Aryan</h5>
                                        <span className="time">45 minutes ago!</span>
                                    </div>
                                    <button className="reply-btn"><FaReply /> REPLY</button>
                                </div>
                                <div className="Goldstars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{ color: "#ffc107" }} />
                                </div>
                                <p className="review-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore
                                    fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima,
                                    adipisci natus quod magni omnis quas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="review-reply-form mt-3">
                <h4 className="form-title">Review Reply Form</h4>
                <textarea
                    className="reply-textarea"
                    placeholder="write here"
                ></textarea>
                <button className="reply-submit-btn">DROP YOUR REPLIES</button>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;
