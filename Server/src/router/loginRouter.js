const { Router } = require('express');
const loginController = require('../controller/loginController');

const loginRouter = Router();

loginRouter.post('/login', loginController.login);

module.exports = loginRouter;