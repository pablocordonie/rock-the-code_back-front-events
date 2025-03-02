const errorsManager = (err, req, res, next) => res.status(err.statusCode || 500).json({ message: err.message });

module.exports = { errorsManager };