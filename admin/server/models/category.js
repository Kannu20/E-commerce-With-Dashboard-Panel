// ✅ Importing mongoose
const mongoose = require('mongoose');

// ✅ Defining the schema for a category
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  images: [{ type: String, required: true }], // <-- plural array
  color: { type: String, required: false }
}, { timestamps: true });


// ✅ Creating and exporting the Category model
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;

