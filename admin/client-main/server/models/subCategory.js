const mongoose = require("mongoose");

const subCatSchema = new mongoose.Schema({
  subCat: { type: String, required: true }, // "Men", "Shoes", etc.
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",   // 👈 reference to Category model
    required: true
  },
  color: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("SubCategory", subCatSchema);