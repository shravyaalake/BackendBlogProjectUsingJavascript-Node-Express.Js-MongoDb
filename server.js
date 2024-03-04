// Import necessary modules and models
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../backend-blog-project/schemas/blogschema'); // Import the Blog model

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });


    // POST API to create a new blog
app.post('/blogs', async (req, res) => {
    try {
        const { title, blogContent, authorName } = req.body;
        const blog = new Blog({ title, blogContent, authorName });
        await blog.save(); // Save the blog to the database
        res.status(201).json(blog); // Respond with the created blog
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET API to fetch all blogs
app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find(); // Retrieve all blogs from the database
        res.json(blogs); // Respond with the fetched blogs
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});