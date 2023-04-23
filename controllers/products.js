const mongoose = require('mongoose')
const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    try {
        const products = await Product.find(req.query)
        console.log(req.query)
        if(products.length === 0){
          res.send("No products in the database");
        }
        else{
          res.status(200).json({ products, nbHits: products.length });
        }
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