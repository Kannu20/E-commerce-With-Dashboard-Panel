const express = require("express");
const router = express.Router();
const SubCategory = require("../models/subCategory");

// ✅ GET SubCategories with Category details
router.get("/", async (req, res) => {
  try {
    const subCategories = await SubCategory.find()
      .populate("category", "name images color"); // sirf yeh fields bhejo

    res.json({ success: true, subCategoryList: subCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ CREATE new SubCategory
router.post("/", async (req, res) => {
  try {
    const { subCat, color, category } = req.body;

    if (!subCat || !category) {
      return res.status(400).json({
        success: false,
        message: "SubCategory name and category id required"
      });
    }

    const newSub = new SubCategory({ subCat, color, category });
    await newSub.save();

    res.status(201).json({ success: true, data: newSub });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;