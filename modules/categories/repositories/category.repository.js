const Category = require("../models/category");

class categoryRepository {
  async createCategory (categoryData) {
    return await Category.create(categoryData)
  }

  async getCategories() {
    return await Category.find()
  }

  async getCategoryById (id) {
    return await Category.findById(id)
  }

  async updateCategory (id, categoryData) {
    return await Category.findByIdAndUpdate(id, categoryData, { new: true })
  }

  async deleteCategory (id) {
    return await Category.findByIdAndDelete(id)
  }
}

module.exports = new categoryRepository()