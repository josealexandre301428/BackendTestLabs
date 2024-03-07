const pg = require('pg');
const express = require('express');
require('express-async-errors');
require('dotenv').config();
const { createPool } = require('@vercel/postgres');
const cors = require('cors');
const loginRouter = require('../router/loginRouter');
const registerRouter = require('../router/registerRouter');
const productsRouter = require('../router/productRouter');

const { Pool } = pg;

const app = express();
app.use(express.json());
app.use(cors());


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

app.use((req, _res, next) => {
  req.db = pool;
  next();
});

app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', productsRouter);

module.exports = app;