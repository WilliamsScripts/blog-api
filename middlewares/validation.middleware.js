module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (error) {
      return res.status(500).json({ errors: error.errors })
    }
  }
}