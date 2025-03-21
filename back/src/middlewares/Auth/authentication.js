const User = require('../../api/models/User');
const { verifyToken } = require('../../utils/Token/verifyToken');

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            const error = new Error(`the user's authentication token couldn't be found`);
            error.statusCode = 404;
            return next(error);
        }

        const parsedToken = token.replace('Bearer ', '');
        const id = verifyToken(parsedToken);

        const user = await User.findById(id).select('-password');
        if (!user) {
            const error = new Error(`you're not authorized to make the request`);
            error.statusCode = 401;
            return next(error);
        }

        req.user = user;
        next();
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = `an error occurred processing the user's authentication token`;
        }
        return next(err);
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            const error = new Error(`the administrator's authentication token couldn't be found`);
            error.statusCode = 404;
            return next(error);
        }

        const parsedToken = token.replace('Bearer ', '');
        const id = verifyToken(parsedToken);

        const user = await User.findById(id).select('-password');

        if (!user || user.role !== 'admin') {
            const error = new Error(`you're not authorized to make the request`);
            error.statusCode = 401;
            return next(error);
        }

        req.user = user;
        next();
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = `an error occurred processing the administrator's authentication token`;
        }
        return next(err);
    }
};

module.exports = { isAuth, isAdmin };