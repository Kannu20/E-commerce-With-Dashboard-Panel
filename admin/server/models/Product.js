// // models/Product.js

// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   image: {
//     type: [String],
//     default: ''
//   },
//   brand: {
//     type: String,
//     required: true,

//   },
//   oldprice: {
//     type: Number,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   category: {
//     type: String,
//     default: 'general'
//   },
//   isFeatured: {
//     type: Boolean,
//     default: false,
//   },
//   dateCreated: {
//      type: Date,
//      default: Date.now,
//   },
//   countInStock: {
//     type: Number,
//     required: true,
//     default: 0
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Product', productSchema);

// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },

    // ✅ images plural (array of strings)
    images: {
      type: [String],
      default: [],
    },

    brand: {
      type: String,
      required: true,
    },
    oldprice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      // type: String,
      // default: "general",
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", 
      required: true,
    },

    // ✅ stock field (match frontend name exactly)
    countInstock: {
      type: Number,
      required: true,
      default: 0,
    },

    // ✅ extra fields added (for table headings)
    rating: {
      type: Number,
      default: 0,
    },
    orders: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
