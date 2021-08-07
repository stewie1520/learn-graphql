const { createLogger, format, transports } = require('winston');

/**
 * @param {Object} logParams
 */
const formatParams = (logParams) => {
  const {
    timestamp, level, message, ...args
  } = logParams;
  const ts = timestamp.slice(0, 19).replace('T', ' ');
  return `${ts} ${level}: ${message} ${Object.keys(args).length ? JSON.stringify(args, '', '') : ''}`;
};

const developmentFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(formatParams),
);

const productionFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(formatParams),
);

/**
 * @type {import('winston').Logger}
 */
let logger;

if (process.env.NODE_ENV !== 'production') {
  logger = createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: developmentFormat,
    transports: [new transports.Console()],
  });
} else {
  logger = createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: productionFormat,
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
    ],
  });
}

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports = logger;
