const mongoose = require('mongoose')
const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    try {
        res.status(200).json({msg: "Products testing route"});
    } catch (error) {
        console.log(error)
    }
}

const getAllProducts = async (req, res) => {
  try {
    res.status(200).json({ msg: "Products route" });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllProductsStatic,
    getAllProducts
}