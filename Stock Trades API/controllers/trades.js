const tradeService = require('../service/trades');

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
exports.createTrade = async (req, res, next) => {
  try {
    const {
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp
  } = req.body;

    const trade = await tradeService.createTradeService({
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp
    });

    res.status(201).json(trade);
  } catch (error) {
    next(error);
  }
};

/**
 * This function calls the service layer to fetch all trades from the database using the trade type and user_id as optional parameters.
 * It responds with the trade data.
 *
 * @async
 * @function getAllTrades
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Responds with all trades or an error.
 *
 */
exports.getAllTrades = async (req, res, next) => {
  try {
    const { type, user_id } = req.query;

    const trades = await tradeService.getAllTradesService({ type, user_id  });

    res.status(200).json(trades);
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
  try {
    const trade = await tradeService.getTradeByIdService(req.params.id);

    res.status(200).json(trade);
  } catch (error) {
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
  res.status(405).send('Method not allowed');
};
