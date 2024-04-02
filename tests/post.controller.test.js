const chai = require('chai/register-expect')
const sinon = require('sinon');
const postService = require('../modules/posts/services/post.service');
const postsController = require('../modules/posts/controllers/posts.controller');
const { testDbConnection, closeDbConnection } = require('../test-setup');

describe('Post Controller', () => {
  let req;
  let res;
  describe('PostLists', () => {
    before(async () => {
      await testDbConnection();
        // i can have a faker function that can create any amount of posts in the database 
        // it is written in the before function so the data can be available in the database
        // before trying to fetch the data from the database;
        req = {}
        res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub(),
        }
    })

    after(async() => {
      await closeDbConnection()
    })
    it("should get all post successfully", async () => {
      const expectedDataFromDatabase = [
        {_id: 1, title: 'The boy man a post last week', body: 'The body who man a post last week', createdAt: '', updatedAt: ''},
        {_id: 2, title: 'The boy man a post last week', body: 'The body who man a post last week', createdAt: '', updatedAt: ''},
        {_id: 3, title: 'The boy man a post last week', body: 'The body who man a post last week', createdAt: '', updatedAt: ''}
      ]
      const getAllPostServiceStub = sinon.stub(postService, 'getAllPost').resolves(expectedDataFromDatabase);
      const posts = await postsController.list(req, res);
      chai.expect(posts).deeply.eql(expectedDataFromDatabase);

      sinon.assert.calledOnce(getAllPostServiceStub);
    })
  })
});
