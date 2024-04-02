const categoryRepository = require("../repositories/category.repository");

class categoryService {
  async getAllCategories () {
    return await categoryRepository.getCategories()
  } 

  async getCategoryById (id) {
    return await categoryRepository.getCategoryById(id)
  }

  async storeCategory (categoryData) {
    return await categoryRepository.createCategory(categoryData)
  }

  async updateCategory (id, categoryData) {
    return await categoryRepository.updateCategory(id, categoryData)
  }

  async deleteCategory (id) {
    return await categoryRepository.deleteCategory(id)
  }
}

module.exports = new categoryService()