require('dotenv').config()
require('./config/database')
const express = require('express');
const cors = require('cors')
const logger = require('morgan');


const indexRouter = require('./routes/index');
const restaurantsRouter = require('./routes/restaurants');

const { PORT } = process.env
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/restaurants', restaurantsRouter);

app.get('/', (req, res) => {
    res.send('hello world')
  })

  app.listen(PORT, () => {console.log(`Server started on ${PORT}`)})