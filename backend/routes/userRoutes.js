const express = require("express");
const router = express.Router();
const users = require("../data/users.json");
const posts = require("../data/posts.json");

// GET all users
router.get("/", (req, res, next) => {
  try {
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET single user
router.get("/:id", (req, res, next) => {
  try {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// GET user posts
router.get("/:id/posts", (req, res, next) => {
  try {
    const userPosts = posts.filter(p => p.userId === parseInt(req.params.id));
    res.json(userPosts);
  } catch (err) {
    next(err);
  }
});

// POST update a post
router.post("/:id/post/:postId", (req, res, next) => {
  try {
    const { title, body } = req.body;
    const updated = posts.find(p => p.id === parseInt(req.params.postId));
    if (updated) {
      updated.title = title;
      updated.body = body;
      res.json({ success: true, post: updated });
    } else {
      const error = new Error("Post not found");
      error.status = 404;
      throw error;
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
// This code defines the user routes for the Express application.
// It includes routes to get all users, a single user by ID, user posts, and
// to update a post by ID. Each route handles errors and returns appropriate
// responses. The routes are modularized using Express Router for better organization.
// The code uses JSON data for users and posts, simulating a database.
// The error handling is done using middleware to catch and respond to errors gracefully.
// The routes are exported for use in the main application file.
// The code is structured to be clear and maintainable, following best practices for Express.js applications