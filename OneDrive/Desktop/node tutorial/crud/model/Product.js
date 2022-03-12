const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  mobile_no: {
    type: String,
    unique: true,
    required: [true, "Mobile is required"],
  },
  // mobile_no : String,
  details: String,
});
module.exports = mongoose.model("Product", productSchema);
