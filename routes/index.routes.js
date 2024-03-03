const postRoutes = require('../modules/posts/routes/post.routes')

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
}