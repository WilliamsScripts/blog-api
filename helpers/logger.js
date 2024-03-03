const { existsSync, mkdirSync } = require('fs');
const winston = require('winston');
const { NODE_ENV, APP_NAME } = require('../config/global');
const { configure, format, transports } = winston;

module.exports = () => {
  if (!NODE_ENV) NODE_ENV = 'development';

  const loggerTransports = [];

  if (!existsSync('logs')) {
    mkdirSync('logs', {
      recursive: true,
    });
  }

  if (NODE_ENV === 'development') {
    loggerTransports.push(
      new transports.File({
        level: 'info',
        filename: 'logs/development.log',
      }),
      new transports.File({
        level: 'error',
        filename: 'logs/development-error.log',
      })
    );
  }

  if (NODE_ENV === 'production') {
    loggerTransports.push(
      new transports.File({
        level: 'info',
        filename: 'logs/production.log',
      }),
      new transports.File({
        level: 'error',
        filename: 'logs/production-error.log',
      })
    );
  }

  configure({
    level: 'info',
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss A' }),
      format.errors({ stack: true }),
      format.splat(),
      format.json()
    ),
    defaultMeta: { service: `${APP_NAME}` },
    transports: loggerTransports,
    exitOnError: false,
  });
  if (NODE_ENV === 'development') {
    winston.add(
      new transports.Console({
        format: format.combine(format.colorize(), format.simple()),
      })
    );
  }
};