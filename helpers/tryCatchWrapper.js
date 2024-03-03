module.exports = (callback) => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (error) {
    next(error);
  }
};

// module.exports = (callback) => (req, res, next) => Promise.resolve(callback(req, res, next)).catch(next)