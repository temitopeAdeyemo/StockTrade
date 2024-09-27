const tradeRepository = require('../repository/trades');
const AppError = require('../utils/AppError');

/**
 * This function creates a new trade by taking in a payload of trade data and 
 * saving it using the Trade repository. It returns the created trade.
 *
 * @async
 * @function createTradeService
 * @param {Object} payload - The data required to create a new trade.
 * @returns {Promise<Object>} The newly created trade object.
 */
exports.createTradeService = async (payload) => {
  const { type, user_id, symbol, shares, price, timestamp } = payload;

    const newTrade = await tradeRepository.create({
        type,
        user_id,
        symbol,
        shares,
        price,
        timestamp
    });

    return newTrade
};

/**
 *This function fetches all the trades from the Trade repository and returns them as an array.
 *
 * @async
 * @function getAllTradesService
 * @returns {Promise<Array<Object>>} An array of all trade objects.
 */
exports.getAllTradesService = async (payload) => {
    const { type, user_id } = payload;
    
    let filter = {};

    if (type) filter.type = type;

    if (user_id) filter.user_id = user_id;

    const trades = await tradeRepository.getAll(filter);

    return trades;
};

/**
 * This function retrieves a specific trade by its ID from the Trade repository.
 * If the trade is not found, it throws an AppError with a 404 status.
 *
 * @async
 * @function getTradeByIdService
 * @param {number|string} id - The ID of the trade to retrieve.
 * @returns {Promise<Object>} The trade object if found.
 * @throws {AppError} If the trade with the specified ID is not found, a 404 error is thrown.
 */
exports.getTradeByIdService = async (id) => {
    const tradeId = parseInt(id);

    const trade = await tradeRepository.getById(tradeId);

    if (!trade) throw new AppError('ID not found', 404);

    return trade;
};