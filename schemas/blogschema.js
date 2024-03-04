// blogSchema.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    blogContent: { type: String, required: true },
    authorName: { type: String, required: true }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
