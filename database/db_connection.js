const winston = require('winston');
const mongoose = require("mongoose");
const { DB_URI } = require('../config/global');

module.exports = () => {
  mongoose.connect(DB_URI)
  .then(() => {
    winston.info('MONGO CONNECTION OPEN!!!.');
  })
  .catch((err) => {
    winston.error('Uncaught exception:', err);
  });
}