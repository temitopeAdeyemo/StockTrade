const express = require('express');
const router = express.Router();

const TradesController = require('../controllers/trades');

// POST: Create a new trade
router.post('/', TradesController.createTrade);

// GET: Fetch all trades
router.get('/', TradesController.getAllTrades);

// GET: Fetch a specific trade by ID
router.get('/:id', TradesController.getTradeById);

// Disallow DELETE, PUT, PATCH on trades/:id
router.delete('/:id', TradesController.methodNotAllowed);
router.put('/:id', TradesController.methodNotAllowed);
router.patch('/:id', TradesController.methodNotAllowed);

module.exports = router;
