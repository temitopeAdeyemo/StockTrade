const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');

const os = require('os');
const AppError = require('./utils/AppError');
const LINE_ENDING = os.EOL;

/**
 * Middleware to validate the provided API key from the request headers.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function in the request-response cycle.
 * 
 * This middleware checks if the `x-api-key` header is present and valid. 
 * If no API key is provided, it triggers an `AppError` with a 401 status.
 * It reads the valid keys from the `valid-keys.txt` file and compares them with the provided key.
 * If the API key is valid, the request proceeds to the next middleware.
 * If the key is invalid or there's an error, an appropriate error is passed to the `next` function.
 */
module.exports = function (req, res, next) {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) next(new AppError('No API Key provided', 401));

    try {
        fs.readFile(VALID_KEYS_PATH, { encoding: 'utf8' }, (err, data) => {
            if (err) next(err);
            
            const keys = data.split(LINE_ENDING).filter(Boolean);

            if (keys.includes(apiKey)) return next();
            else next(new AppError("Invalid API Key", 401));
        });
    } catch (error) {
        console.error('Error reading API keys:', err);
        next(new AppError("Internal Server Error", 500))
    }
};
