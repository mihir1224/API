const { model } = require("mongoose");
const Product = require("../model/Product");
const { all } = require("../routes/product");

//get all the product
const allProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

//single product
const allProduct_details = (req, res) => {};

//add
const allProduct_create = (req, res) => {};

//update the product
const allProduct_update = (req, res) => {};

//delete product
const allProduct_delete = (req, res) => {};

module.exports = {
  allProduct,
  allProduct_details,
  allProduct_create,
  allProduct_update,
  allProduct_delete,
};
