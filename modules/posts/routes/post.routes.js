const express = require('express')
const router = express.Router();
const validationMiddleware = require('../../../middlewares/validation.middleware');
const postSchema = require('../schemas/post.schema');
const postController = require('../controllers/posts.controller');
const tryCatchWrapper = require('../../../helpers/tryCatchWrapper');


router.get('/', tryCatchWrapper(postController.list));

router.get('/:id', tryCatchWrapper(postController.show))

router.post('/', validationMiddleware(postSchema), tryCatchWrapper(postController.store))

router.put('/:id', validationMiddleware(postSchema), tryCatchWrapper(postController.update))

router.delete('/:id', tryCatchWrapper(postController.destroy))

module.exports = router