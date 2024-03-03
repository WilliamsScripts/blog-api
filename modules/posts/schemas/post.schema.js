const Yup = require('yup')

module.exports = Yup.object().shape({
  title: Yup.string().required(),
  body: Yup.string().required()
})