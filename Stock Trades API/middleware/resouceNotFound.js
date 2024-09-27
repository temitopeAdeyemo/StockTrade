/**
 * This middleware function handles cases where the path or endpoint does not exist.
 * It responds with a 404 status and a JSON message indicating that the path was not found.
 *
 * @function resourceNotFound
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function (not used in this case).
 * @returns {Object} Sends a 404 Not Found response with a custom message.
 */
module.exports = function resourceNotFound(req, res, next){
    return res.status(404).json({success: true, message: "Dead End, No such path."});
}