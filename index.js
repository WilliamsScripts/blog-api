const express = require('express')
const cors = require('cors');
const routes = require('./routes/index.routes');
const logMaster = require('./helpers/logger')
const mongoDBConfig = require('./database/db_connection')
const app = express()

mongoDBConfig()

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

routes(app)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

logMaster()

module.exports = { app }