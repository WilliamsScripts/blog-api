const postRoutes = require('../modules/posts/routes/post.routes')
const categoryRoutes = require('../modules/categories/routes/category.routes')
const notFound = require('../helpers/notFound')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send(`
      Welcome to my blog API! \n 
      Here are the routes you can visit: \n 
      1. GET /posts \n
      2. GET /posts/:id \n
      3. POST /posts \n
      4. PUT /posts/:id \n
      5. DELETE /posts:id \n
    `)
  })

  app.use('/posts', postRoutes);
  app.use('/categories', categoryRoutes)

  app.all('*', (req, res) =>
    notFound(res)
  );
}