function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;
// This code defines a custom error handler for an Express application.
// It logs the error stack to the console and sends a JSON response with the error status and message.
// The handler is designed to catch errors that occur during request processing and respond with appropriate HTTP status codes and messages.
// It also includes a 404 handler for resources not found.
// The error handler checks if headers have already been sent to avoid attempting to send a response multiple times.
// This is useful for debugging and providing a consistent error response format in the application.