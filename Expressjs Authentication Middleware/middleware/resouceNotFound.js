/**
 * Middleware to communicate that "resource not found" when the client tries to hit an invalid endpoint. It returms a status code 404
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function in the request-response cycle (not used in this case).
 * 
 */
module.exports = function resourceNotFound(req, res, next){
    return res.status(404).json({success: true, message: "Dead End, No such path."});
}