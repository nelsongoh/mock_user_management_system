const express = require('express');

const rootRouter = express.Router();
const user = require('./user');

rootRouter.use('/api/user', user);

module.exports = rootRouter;
