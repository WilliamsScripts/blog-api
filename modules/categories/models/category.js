const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updated_at: {
    type: Date
  }
})

categorySchema.pre('save', (next) => {
  this.updated_at = Date.now()
  next()
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category