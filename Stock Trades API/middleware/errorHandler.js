const AppError = require("../utils/AppError");

/**
 * Global error handler middleware to manage application errors and send appropriate responses.
 * 
 * @param {Object} error - The error object, which could be an instance of `AppError` or a generic error.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function in the request-response cycle (not used in this case).
 * 
 * This middleware handles both custom `AppError` instances and generic errors
 */
module.exports = function errorHandler(
    error,
    req,
    res,
    next
  ) {
    console.log(".............", error);
    if(error instanceof AppError){
        return res.status(error.statusCode).send(error.message 
        );
    }else{
      return res.status(500).json({ 
        success: false,
        error: "Internal Server Error" 
      });
    }
  }