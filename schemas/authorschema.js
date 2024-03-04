// authorSchema.js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
