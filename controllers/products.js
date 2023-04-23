const mongoose = require('mongoose')
const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    try {
      const {featured, company, name } = req.query
      const queryObject = {}
      if (featured) {
        if (featured == true) {
          queryObject.featured = true
        }
        else{
          queryObject.featured = false
        }
      }
      if(company){
        queryObject.company = company
      }

      if(name){
        queryObject.name = { $regex: name, $options: 'i' }  
      }
      
        const products = await Product.find(queryObject).sort('name')
        if(products.length === 0){
          res.send("No products with the following filters exist !");
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