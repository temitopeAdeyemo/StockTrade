const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./connection')
const indexRouter = require('./routes/index');
const tradesRouter = require('./routes/trades');
const errorHandler = require('./middleware/errorHandler.js');
const resourceNotFound = require('./middleware/resouceNotFound.js');

const app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/trades', tradesRouter);
app.use('/', indexRouter);
app.use(errorHandler);
app.use(resourceNotFound)

module.exports = app;
