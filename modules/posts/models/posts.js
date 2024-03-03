const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  body: {
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

postSchema.pre('save', (next) => {
  this.updated_at = Date.now()
  next()
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post