const express = require("express");
const router = express.Router();
const users = require("../data/users.json");
const posts = require("../data/posts.json");
const { body, validationResult } = require("express-validator");

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
  console.log(`Fetching user with ID: ${req.params.id}`);
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
  console.log(`Fetching posts for user ID: ${req.params.id}`);
  try {
    const userPosts = posts.filter(p => p.userId === parseInt(req.params.id));
    res.json(userPosts);
  } catch (err) {
    next(err);
  }
});

// GET user post data
router.get("/post/:id", (req, res, next) => {
  console.log(`Fetching post data for post ID: ${req.params.id}`);
  try {
    const userPosts = posts.filter(p => p.id === parseInt(req.params.id));
    res.json(userPosts[0]);
  } catch (err) {
    next(err);
  }
});

// POST update a post
router.post("/:id/post/:postId",
  body("title").isLength({ min: 1 }),
  body("body").isLength({ min: 1 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed");
      err.status = 400;
      return next(err);
    }
    try {
      const updated = posts.find(p => p.id === parseInt(req.params.postId));
      if (updated) {
        updated.title = req.body.title;
        updated.body = req.body.body;
        res.json({ success: true, post: updated });
      } else {
        const error = new Error("Post not found");
        error.status = 404;
        throw error;
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
// This code defines the user routes for the Express application.
// It includes routes to get all users, a single user by ID, user posts, and
// to update a post by ID. Each route handles errors and returns appropriate
// responses. The routes are modularized using Express Router for better organization.
// The code uses JSON data for users and posts, simulating a database.
// The error handling is done using middleware to catch and respond to errors gracefully.
// The routes are exported for use in the main application file.
// The code is structured to be clear and maintainable, following best practices for Express.js applications