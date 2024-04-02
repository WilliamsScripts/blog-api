const notFound = require("../../../helpers/notFound")
const postService = require("../services/post.service")

class postController {
  async list (req, res) {
    const posts = await postService.getAllPost()
    return res.status(200).json(posts)
  }

  async store (req, res) {
    const post = await postService.storePost(req.body)
    return res.status(200).json(post)
  }

  async update (req, res) {
    const post = await postService.updatePost(req.params.id, req.body)
    if (!post) {
      return notFound(res)
    }
    return res.status(200).json(post)
  }

  async show (req, res) {
    const post = await postService.getPostById(req.params.id)
    if (!post) {
      return notFound(res)
    }
    return res.status(200).json(post)
  }

  async destroy (req, res) {
    const post = await postService.deletePost(req.params.id)
    if (!post) {
      return notFound(res)
    }
    return res.status(200).send('Post deleted successfully')
  }
}

module.exports = new postController()