function errorHandler(err, req, res, next) {
  console.error(err.stack);

   res.status(404).json({
    success: false,
    message: "Resource not found"
  });

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
}

module.exports = errorHandler;
// This code defines a custom error handler for an Express application.
// It logs the error stack to the console and sends a JSON response with the error status and message.
// The handler is designed to catch errors that occur during request processing and respond with appropriate HTTP status codes and messages.
// It also includes a 404 handler for resources not found.