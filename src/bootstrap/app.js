const express = require('express');

const { useAppMiddlewares } = require('@/middlewares/app');
const { useErrorHandler } = require('@/middlewares/error');

const app = express();

useAppMiddlewares(app);

app.use('/', require('@/routes'));

useErrorHandler(app);

module.exports = app;
