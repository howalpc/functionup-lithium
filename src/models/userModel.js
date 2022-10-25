const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    bookname: String,
    autherName: String,
    edition: String,




}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array
// controllers/userController.js
        modified:   index.js
        modified:   models/userModel.js
