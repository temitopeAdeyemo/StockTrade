const tradeService = require('../service/trades');
const AppError = require('../utils/AppError');

/**
 * This function extracts trade data from the request body and passes it to the service layer to create a new trade.
 * Upon successful creation, it responds with the trade data and a 201 status code.
 *
 * @async
 * @function createTrade
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Responds with the newly created trade or an error.
 */
exports.createTrade = async (req, res) => {
  const { type, user_id, symbol, shares, price, timestamp } = req.body;

  try {
    const newTrade = await tradeService.createTradeService({ type, user_id, symbol, shares, price, timestamp } )

    return res.status(201).json(newTrade);
  } catch (error) {
    next(error);
  }
};

/**
 * This function calls the service layer to fetch all trades from the database and responds with the trade data.
 *
 * @async
 * @function getAllTrades
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Responds with all trades or an error.
 *
 */
exports.getAllTrades = async (req, res) => {
  try {
    const allTrades = await tradeService.getAllTradesService();

    return res.status(200).json(allTrades);
  } catch (error) {
    next(error);
  }
};

/**
 * This function extracts the trade ID from the request parameters, calls the service layer to find the trade by ID,
 * and responds with the trade data if found. If the trade is not found, it throws an error.
 *
 * @async
 * @function getTradeById
 * @param {Object} req - Express request object, which contains the trade ID as a parameter.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Promise<void>} Responds with the trade data or an error.
 */
exports.getTradeById = async (req, res, next) => {
  const tradeId = parseInt(req.params.id);

  try {
    // Use Sequelize to find the trade by ID
    const trade = await tradeService.getTradeByIdService(tradeId);
    
    return res.status(200).json(trade);
  } catch (error) {
    console.error("Error fetching trade by ID:", error);
    next(error);
  }
};

/**
 * This function is used to handle unsupported HTTP methods for specific routes.
 *
 * @function methodNotAllowed
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Sends a 405 Method Not Allowed response.
 */
exports.methodNotAllowed = (req, res) => {
  return res.status(405).send('Method Not Allowed');
};
