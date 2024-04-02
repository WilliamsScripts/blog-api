const notFound = require("../../../helpers/notFound")
const categoryService = require("../services/category.service")

class categoryController {
  async list (req, res) {
    const categories = await categoryService.getAllCategories()
    return res.status(200).json(categories)
  }

  async show (req, res) {
    const category = await categoryService.getCategoryById(req.params.id)
    if (!category) {
      return notFound(res)
    }
    return res.status(200).json(category)
  }

  async store (req, res) {
    const category = await categoryService.storeCategory(req.body)
    return res.status(200).json(category)
  }

  async update (req, res) {
    const category = await categoryService.updateCategory(req.params.id, req.body)
    if (!category) {
      return notFound(res)
    }
    return res.status(200).json(category)
  }

  async destroy (req, res) {
    const category = await categoryService.deleteCategory(req.params.id)
    if (!category) {
      return notFound(res)
    } 
    return res.status(200).send('Category deleted successfully')
  }
}

module.exports = new categoryController()