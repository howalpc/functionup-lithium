const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    auterName: String,
    tags: [String],
    stalkAvailable: Boolean,
    totalPages: Number,

    isPublished: Boolean,
    prices: {
      indianPrice: String,
      europePrice: String,
    },
    year: Number,
  },
  { timestamps: true }
);


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
