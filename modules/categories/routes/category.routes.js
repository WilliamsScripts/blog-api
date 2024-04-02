const express = require('express')
const router = express.Router()
const validationMiddleware = require('../../../middlewares/validation.middleware')
const categorySchema = require('../schemas/category.schema')
const categoryController = require('../controllers/category.controller')
const tryCatchWrapper = require('../../../helpers/tryCatchWrapper')


router.get('/', tryCatchWrapper(categoryController.list))

router.get('/:id', tryCatchWrapper(categoryController.show))

router.post('/', validationMiddleware(categorySchema), tryCatchWrapper(categoryController.store))

router.put('/:id', validationMiddleware(categorySchema), tryCatchWrapper(categoryController.update))

router.delete('/:id', tryCatchWrapper(categoryController.destroy))

module.exports = router