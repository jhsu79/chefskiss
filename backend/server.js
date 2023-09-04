require('dotenv').config()
require('./config/database')

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const logger = require('morgan');

const indexRouter = require('./routes/index');
const restaurantsRouter = require('./routes/restaurants');

const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/restaurants', restaurantsRouter);

module.exports = app;