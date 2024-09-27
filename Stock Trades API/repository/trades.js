const Trade = require('../models/trades');

/**
 * Creates a new trade in the database.
 *
 * @async
 * @function create
 * @param {Object} payload - The data required to create a new trade.
 * @returns {Promise<Object>} The newly created trade object.
 */
exports.create = async (payload) => {
      const newTrade = await Trade.create(payload);
  
      return newTrade
  };
  
/**
 * Retrieves all trades from the database based on given filter parameter.
 *
 * @async
 * @function getAll
 * @returns {Promise<Array<Object>>} An array of all trade objects.
 */
  exports.getAll = async (filter) => {
      const allTrades = await Trade.findAll({
        where: filter
      });
  
      return allTrades;
  };
  

/**
 * Retrieves a trade by its primary key (ID) from the database.
 *  It returns the trade object if found, otherwise it returns `null`.
 *
 * @async
 * @function getById
 * @param {number} id - The ID of the trade to retrieve.
 * @returns {Promise<Object|null>} The trade object if found, or `null` if not found.
 *
 */
  exports.getById = async (id) => {
    const trade = await Trade.findByPk(id);
  
    return trade;
  };