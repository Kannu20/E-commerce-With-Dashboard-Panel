// routes/product.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Category = require('../models/category');


// fCreate product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().populate("category", "name -_id");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

//   const productList=[];
//   if(req.query.catName !== undefined){
//     productList = await Product.find({catName:req.query.catName}).populate("category");
//   }
// });
router.get("/", async (req, res) => {
  try {
    let filter = {};
    if (req.query.catName) {
      // Find category by name
      const category = await Category.findOne({ name: req.query.catName });
      if (category) {
        filter = { category: category._id }; // Filter by category ID
      }
    }

    const products = await Product.find(filter).populate("category", "name");
    res.json(products); // ✅ Always return plain array
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get(`/featured`, async (req, res) =>{
   const productList = await Product.find({isFeatured:true})
   if (!productList) {
    res.status(500).json({success : false})
   }
   return res.status(200).json(productList);
})
// Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update product by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/products/create
router.post('/create', async (req, res) => {
  try {
    // 1. First, check if the given category exists in the DB
    const category = await Category.findById(req.body.category);

    // If category is invalid or not found
    if (!category) {
      return res.status(404).send("Invalid Category!");
    }

    // 2. Create new product using request body
    let product = new Product(req.body);

    // 3. Save the product to database
    product = await product.save();

    // 4. If product is saved successfully
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });

  } catch (err) {
    // If any error occurs
    console.error("Error while creating product:", err.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message
    });
  }
});

// Delete product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted', deleted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

