
/**
 * Custom Error class to handle application-specific errors.
 * 
 * @class AppError
 * @param {string} message - The error message to be displayed or logged.
 * @param {number} [statusCode=400] - The HTTP status code to return, defaults to 400 (Bad Request).
*/
class AppError {
  /**
   * Creates an instance of AppError.
   * @param {string} message - The error message.
   * @param {number} [statusCode=400] - The HTTP status code (default is 400).
   */
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;