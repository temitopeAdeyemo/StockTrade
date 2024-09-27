var express = require('express');
var router = express.Router();
var tasksController = require('../controllers/tasks.controller');
var authMiddleware = require('../middleware');


router.get('/:id', tasksController.getById);

router.use(authMiddleware);

router
    .post('/', tasksController.create)
    .get('/', tasksController.getAll);

module.exports = router;
