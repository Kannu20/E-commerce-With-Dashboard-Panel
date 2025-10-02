
// const express = require('express');
// const router = express.Router();
// const Category = require('../models/category');


// // GET all categories with pagination
// router.get('/', async (req, res) => {
//   try {
//     let { page, perPage } = req.query;

//     page = parseInt(page) || 1;
//     perPage = parseInt(perPage) || 700; 

//     const totalCategories = await Category.countDocuments();
//     const totalPages = Math.ceil(totalCategories / perPage);

//     const categories = await Category.find()
//       .skip((page - 1) * perPage)
//       .limit(perPage);

//     if (!categories || categories.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'No categories found',
//       });
//     }

//     res.status(200).json({
//       success: true,
//       count: categories.length,
//       totalPages,
//       currentPage: page,
//       perPage,
//       data: categories,
//     });
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error fetching categories',
//       error: error.message,
//     });
//   }
// });



// // GET category by ID
// router.get('/:id', async (req, res) => {
//   const categoryId = req.params.id;

//   try {
//     const category = await Category.findById(categoryId);

//     if (!category) {
//       return res.status(404).json({
//         success: false,
//         message: 'Category not found',
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: category,
//     });
//   } catch (error) {
//     console.error('Error fetching category by ID:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while fetching category by ID',
//     });
//   }
// });

// // DELETE category by ID
// router.delete('/:id', async (req, res) => {
//   const categoryId = req.params.id;

//   try {
//     const deletedCategory = await Category.findByIdAndDelete(categoryId);

//     if (!deletedCategory) {
//       return res.status(404).json({
//         success: false,
//         message: 'Category not found or already deleted',
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: 'Category deleted successfully',
//       data: deletedCategory,
//     });
//   } catch (error) {
//     console.error('Error deleting category:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while deleting category',
//     });
//   }
// });



// router.put('/:id', async (req, res) => {
//   try {
//     const { name, color, images } = req.body || {};

//     if (!name || !color || !Array.isArray(images)) {
//       return res.status(400).json({
//         success: false,
//         message: '⚠️ All fields (name, color, images) are required and images must be an array.',
//       });
//     }

//     const updatedCategory = await Category.findByIdAndUpdate(
//       req.params.id,
//       { name, color, images },
//       { new: true }
//     );

//     if (!updatedCategory) {
//       return res.status(404).json({
//         success: false,
//         message: '❌ Category not found to update',
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: '✅ Category updated successfully',
//       data: updatedCategory,
//     });
//   } catch (error) {
//     console.error('❌ Error updating category:', error);
//     res.status(500).json({
//       success: false,
//       message: '🚨 Server error while updating category',
//       error: error.message,
//     });
//   }
// });



// // Router For Create Function
// router.post('/create', async (req, res) => {
//   try {
//     const { name, color, images } = req.body;

//     if (!name || !color || !images || !Array.isArray(images)) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields (name, color, images) are required and images must be an array.',
//       });
//     }

//     const newCategory = new Category({
//       name,
//       color,
//       images,
//     });

//     const savedCategory = await newCategory.save();

//     res.status(201).json({
//       success: true,
//       message: 'Category created successfully',
//       data: savedCategory,
//     });

//   } catch (error) {
//     console.error('Error creating category:', error.message);
//     res.status(500).json({
//       success: false,
//       message: ' Server error while creating category',
//       error: error.message,
//     });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// ------------------------------------------
// GET all categories with pagination
// ------------------------------------------
router.get('/', async (req, res) => {
  try {
    let { page, perPage } = req.query;

    page = parseInt(page) || 1;
    perPage = parseInt(perPage) || 700;

    const totalCategories = await Category.countDocuments();
    const totalPages = Math.ceil(totalCategories / perPage);

    const categories = await Category.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

    if (!categories || categories.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No categories found',
      });
    }

    res.status(200).json({
      success: true,
      count: categories.length,
      totalPages,
      currentPage: page,
      perPage,
      data: categories,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message,
    });
  }
});

// ------------------------------------------
// GET category by ID
// ------------------------------------------
router.get('/:id', async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found',
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error('Error fetching category by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching category by ID',
    });
  }
});

// ------------------------------------------
// DELETE category by ID
// ------------------------------------------
router.delete('/:id', async (req, res) => {
  const categoryId = req.params.id;

  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: 'Category not found or already deleted',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
      data: deletedCategory,
    });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting category',
    });
  }
});

// ------------------------------------------
// UPDATE category by ID
// ------------------------------------------
router.put('/:id', async (req, res) => {
  try {
    const { name, color, images, subCategory } = req.body || {};

    if (!name || !color || !Array.isArray(images)) {
      return res.status(400).json({
        success: false,
        message: '⚠️ All fields (name, color, images) are required and images must be an array.',
      });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name,
        color,
        images,
        subCategory: Array.isArray(subCategory) ? subCategory : [] // ✅ safe check
      },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: '❌ Category not found to update',
      });
    }

    res.status(200).json({
      success: true,
      message: '✅ Category updated successfully',
      data: updatedCategory,
    });
  } catch (error) {
    console.error('❌ Error updating category:', error);
    res.status(500).json({
      success: false,
      message: '🚨 Server error while updating category',
      error: error.message,
    });
  }
});

// ------------------------------------------
// CREATE Category
// ------------------------------------------
router.post('/create', async (req, res) => {
  try {
    const { name, color, images, subCategory } = req.body;

    if (!name || !color || !images || !Array.isArray(images)) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, color, images) are required and images must be an array.',
      });
    }

    const newCategory = new Category({
      name,
      color,
      images,
      subCategory: Array.isArray(subCategory) ? subCategory : [] // ✅ safe insert
    });

    const savedCategory = await newCategory.save();

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: savedCategory,
    });
  } catch (error) {
    console.error('Error creating category:', error.message);
    res.status(500).json({
      success: false,
      message: ' Server error while creating category',
      error: error.message,
    });
  }
});

module.exports = router;