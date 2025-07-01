
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./handlers/errorHandler");

app.use(cors());
app.use(express.json());// routes
app.use("/users", userRoutes);

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// Export the app for testing
module.exports = app;
// This code sets up an Express server with CORS and JSON parsing middleware.
// It defines a route for user-related operations and includes an error handler.
// The server listens on port 5000 and exports the app for testing purposes.
// The error handler catches errors and sends appropriate JSON responses, including a 404 handler for resources not found.
// The server is modularized for better organization, allowing for easy expansion and maintenance in the future.
// The app is exported for testing, enabling the use of tools like Jest and Supertest to test the API endpoints.
// The code is structured to follow best practices in Express application development, ensuring clarity and maintainability.
// The use of middleware allows for separation of concerns, making the codebase cleaner and more manageable.
// The server is ready to handle user-related requests and can be extended with additional routes and functionality as needed.
// The error handling is designed to provide meaningful feedback to the client, improving the overall user experience when interacting with the API.
// The code is written in a modular fashion, allowing for easy updates and changes in the future.
// It adheres to common conventions in Express.js applications, making it easy for other developers to understand and contribute to the project.
// The server setup is straightforward, focusing on essential features while leaving room for future enhancements.
// The use of environment variables for configuration (like PORT)
// is recommended in production environments, but for simplicity, a hardcoded port is used here.
// The application can be easily tested with tools like Postman or curl, and the exported app allows for automated testing with frameworks like Jest and Supertest.
// Overall, this code provides a solid foundation for building a RESTful API with Express.js, focusing on user management and error handling.
// It is designed to be clear, maintainable, and extensible, following best practices in Node.js development.
//// The server can be started by running `node index.js`, and it will listen for incoming requests
// on the specified port. The user routes can be accessed at `/users`, and the error handler will catch any errors that occur during request processing.
// The application is structured to allow for easy addition of new features and routes in the future, making it a flexible solution for building a user management API.
// The use of middleware for CORS and JSON parsing ensures that the server can handle cross-origin requests
// and parse incoming JSON data, which is essential for modern web applications.
