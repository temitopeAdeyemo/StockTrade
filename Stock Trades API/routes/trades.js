const express = require('express');
const router = express.Router();

const tradesController = require('../controllers/trades');

// Route for creating a trade
router.post('/', tradesController.createTrade);

// Route for getting all trades
router.get('/', tradesController.getAllTrades);

// Route for getting a trade by ID
router.get('/:id', tradesController.getTradeById);

// Return 405 for PUT, PATCH, and DELETE operations
router.put('/:id', tradesController.methodNotAllowed);
router.patch('/:id', tradesController.methodNotAllowed);
router.delete('/:id', tradesController.methodNotAllowed);


module.exports = router;
