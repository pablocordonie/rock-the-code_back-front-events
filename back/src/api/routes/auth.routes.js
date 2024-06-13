const authsRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/error');
const { register, login } = require('../controllers/auth');
const { validateRegister, validateLogin } = require('../../middlewares/validators');
const { uploadAvatar } = require('../../middlewares/file');

authsRouter.post('/register', validateRegister, uploadAvatar.single('img'), register);
authsRouter.post('/login', validateLogin, login);

authsRouter.use(errorsManager);

module.exports = authsRouter;