import React, { useState } from "react";

import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { PiDotsNineLight } from "react-icons/pi";
import { PiGridNineFill } from "react-icons/pi";
import Pagination from '@mui/material/Pagination';

import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  "Mens", "Womens", "Kids", "Footwear", "Perfume", "Grocery & Staples", "Household Needs"
];

const brands = ["LifeStyle", "Adidas", "Zara", "Rado", "Puma"];

const products = [
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",

    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
  {
    id: 1,
    title: "Roasted American nuts",
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    price: "$7.25",
    discount: "23%",
  },
];


const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [price, setPrice] = useState(7000);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
  };

  return (
    <div className="listing-container" style={{ display: "flex", gap: "20px", padding: "20px" }}>

      {/* Sidebar */}
      <div className="sidebar" style={{ width: "300px", flexShrink: 0 }}>
        <p className="breadcrumb" style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Home &gt; <span style={{ fontWeight: "bold", color: "#000" }}>Shop</span>
        </p>

        {/* Categories */}
        <div className="section">
          <h4>Product Categories</h4>
          {categories.map((cat, index) => (
            <label key={index} style={{ display: "block", marginBottom: "6px", fontSize: "14px", color: "#333" }}>
              <input
                type="checkbox"
                checked={selectedCategory === cat}
                onChange={() => handleCategoryChange(cat)}
                style={{ marginRight: "8px" }}
              />
              {cat}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="section" style={{ marginTop: "20px" }}>
          <h4>Filter by Price</h4>
          <input
            type="range"
            min="0"
            max="7000"
            step="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%" }}
          />
          <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Price: ₹0 — ₹{price}</span>
            <button style={{ padding: "5px 10px", background: "#000", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
              FILTER
            </button>
          </div>
        </div>

        {/* Product Status */}
        <div className="section" style={{ marginTop: "20px" }}>
          <h4>Product Status</h4>
          <label style={{ display: "block", marginBottom: "6px" }}>
            <input type="checkbox" style={{ marginRight: "8px" }} /> In Stock
          </label>
          <label style={{ display: "block" }}>
            <input type="checkbox" style={{ marginRight: "8px" }} /> On Sale
          </label>
        </div>

        {/* Brands with limited scroll */}
        <div className="section" style={{ marginTop: "20px" }}>
          <h4>Brands</h4>
          <div style={{ maxHeight: "160px", overflowY: "auto", paddingRight: "6px" }}>
            {brands.map((brand, index) => (
              <label key={index} style={{ display: "block", marginBottom: "6px", fontSize: "14px" }}>
                <input
                  type="checkbox"
                  checked={selectedBrand === brand}
                  onChange={() => handleBrandChange(brand)}
                  style={{ marginRight: "8px" }}
                />
                {brand} <span style={{ float: "right", color: "#888" }}>(10)</span>
              </label>
            ))}
          </div>
        </div>

        {/* Banner image below the scroll */}
        <div className="sidebar-banner" style={{ marginTop: "25px" }}>
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
            alt="Happy Hour"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="content-right" style={{ flexGrow: 1 }}>
        {/* Top Banner */}
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
          style={{ width: "100%", borderRadius: "10px" }}
          alt="Top Banner"
        />

        <div
          className="showBy mt-3 mb-3 d-flex align-items-center justify-content-between"
          style={{ gap: "20px" }}
        >
          <div className="d-flex align-item-center btnWrapper" style={{ gap: "10px" }}>
            <Button><IoMdMenu /></Button>
            <Button><CiGrid41 /></Button>
            <Button><PiDotsNineLight /></Button>
            <Button><PiGridNineFill /></Button>
          </div>

          <div className="sort-section d-flex" style={{ gap: "15px" }}>
            <select>
              <option>Sort by latest</option>
              <option>Sort by price</option>
              <option>Sort by popularity</option>
            </select>
            <select>
              <option>Show 9</option>
              <option>Show 12</option>
              <option>Show 15</option>
            </select>
          </div>
        </div>
        <div className="ProductListing">
          {/* <h4>Product are coming soon..</h4> */}
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Link to={`/product/${1}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ borderRadius: 2, height: "100%", cursor: "pointer" }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        height: 180,
                        objectFit: "contain",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                    <CardContent>
                      {product.discount && (
                        <Typography
                          sx={{
                            backgroundColor: "#00bcd4",
                            display: "inline-block",
                            color: "white",
                            fontSize: 12,
                            px: 1,
                            borderRadius: 1,
                            mb: 1,
                          }}
                        >
                          {product.discount} OFF
                        </Typography>
                      )}
                      <Typography variant="subtitle1" fontWeight={500} color="textPrimary">
                        {product.title}
                      </Typography>
                      <Typography color="primary" fontWeight={600}>
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>

        </div>
        <div className="d-flex align-item-center justify-content-center mt-3">
          <Pagination count={10} color="primary" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default Listing;
