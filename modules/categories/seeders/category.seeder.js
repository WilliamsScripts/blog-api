const winston = require("winston")
const Category = require("../models/category")

const seedCategories = [
  {
    name: 'Category 1',
  },
  {
    name: 'Category 2',
  },
  {
    name: 'Category 3',
  },
  {
    name: 'Category 4',
  },
  {
    name: 'Category 5',
  }
]

const seedDB = async () => {
  await Category.deleteMany()
  await Category.insertMany(seedCategories)
}

seedDB()
  .then(() => {
    winston.info('Category seeded successfully')
  })
  .catch(err => {
    winston.error('Error while seeding categories: ', err)
  })

module.exports = seedDB