require('dotenv/config');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoDBConfig = require('./database/db_connection')
let mongoServer;


const testDbConnection = async () => {
  mongoDBConfig()
}


const closeDbConnection = async() => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log("Unable to close test db connection:  ", error)
  }
}


module.exports={
  testDbConnection,
  closeDbConnection
}