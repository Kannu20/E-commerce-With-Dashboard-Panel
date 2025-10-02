// server/middleware/middleware.js

const morgan = require('morgan');

// Custom Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({
    success: false,
    message: '🚨 Internal Server Error',
    error: err.message,
  });
};

// Not Found Middleware
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: '❌ Route not found',
  });
};

// Dummy Auth Middleware (you can replace with real logic)
const authMiddleware = (req, res, next) => {
  // Example check
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ success: false, message: '🔒 Unauthorized' });
  }
  // Validate token logic here (e.g., JWT verify)
  next();
};

module.exports = {
  logger: morgan('dev'),
  errorHandler,
  notFound,
  authMiddleware,
};
