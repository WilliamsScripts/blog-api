const Post = require("../models/posts");

class postRepository {
  async createPost (postData) {
    return await Post.create(postData)
  }

  async getPosts () {
    return await Post.find()
  }

  async getPostById (id) {
    return await Post.findById(id)
  }

  async updatePost (id, postData) {
    return await Post.findByIdAndUpdate(id, postData, { new: true })
  }

  async deletePost (id) {
    return await Post.findByIdAndDelete(id)
  }
}

module.exports = new postRepository()