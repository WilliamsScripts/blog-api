require('dotenv/config');
const mongoose = require('mongoose')
const postsSeeder = require('../modules/posts/seeders/posts.seeder')
const db_connection = require('./db_connection');
const logger = require('../helpers/logger');
const winston = require('winston');


const initialize = async () => {
  try {
    db_connection()
    logger()
    await postsSeeder();
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    winston .error('An error occurred:', error);
    process.exit(1);
  }
};

initialize()