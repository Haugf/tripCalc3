const request = require('supertest')
const app = require('./app.js')
describe('Get Calculated Cost Endpoint', () => {
  it('should return 422', async () => {
    const res = await request(app)
      .get('/calculate')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(422)
  })
})