const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: [String, "Please enter a valid name"],
    required: [true, "Please enter your name"],
  },

  price: {
    type: Number,
    required: [true, "Please enter the price"],
  },

  featured: {
    type: Boolean,
    default: false,
  },

  rating: {
    type: Number,
    default: 4.5,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
