const postsRepository = require("../repositories/posts.repository");

class postService {
  async getAllPost () {
    return await postsRepository.getPosts()
  }

  async getPostById (id) {
    return await postsRepository.getPostById(id)
  }

  async storePost (postData) {
    return await postsRepository.createPost(postData)
  }

  async updatePost (id, postData) {
    return await postsRepository.updatePost(id, postData)
  }

  async deletePost (id) {
    return await postsRepository.deletePost(id)
  }
}


module.exports = new postService()