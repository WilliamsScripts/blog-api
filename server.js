require('dotenv/config');
const winston = require("winston");
const { app } = require("./index");
const http = require("http");
const { HOST, PORT } = require('./config/global');

const server = http.createServer(app);

server.listen(PORT, () => {
  winston.info(`Server running on ${HOST}:${PORT}`);
});

process.on('SIGINT', () => {
  winston.info('Shutting down server gracefully...');
  server.close(() => {
    winston.info('Server shut down.');
    process.exit(0);
  });
});

process.on('uncaughtException', err => {
  winston.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  winston.error('Unhandled Rejection', reason);
  process.exit(1);
});