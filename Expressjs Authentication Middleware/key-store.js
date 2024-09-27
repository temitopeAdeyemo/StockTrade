const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
const AppError = require('./utils/AppError');
const LINE_ENDING = require('os').EOL;

/**
 * Generates a new API key, appends it to the valid-keys file, and returns it in the response.
 * 
 * The function generates a new unique API key using the `shortid` library. 
 * The key is formatted with the system's line ending and appended to the `valid-keys.txt` file.
 * If successful, the API key is returned in the response with a 200 status code.
 * If an error occurs during file write, it logs the error and throws an `AppError` with a 500 status code.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
module.exports = function (req, res) {
    const newKey = shortid.generate();
    const formatedKey = newKey + LINE_ENDING;

    fs.appendFile(VALID_KEYS_PATH, formatedKey, (err) => {
        if (err) {
            console.error('Error saving API key:', err);
            throw new AppError("Internal Server Error", 500)
        }

        res.status(200).json({ apiKey: newKey });
    });
};

