const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const { Config } = require('@/config');

/**
 * add neccessary middlewares for Express app
 * @param {import('express').Express} app - Express app instance
 */
const useAppMiddlewares = (app) => {
  app.set('trust proxy', 1);

  app.use(cookieParser(Config.get('session.secret')));

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(cors({
    origin: '*',
  }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = { useAppMiddlewares };
