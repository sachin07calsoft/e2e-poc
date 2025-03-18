// __tests__/app.test.js
const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Welcome to My Website');
    expect(response.status).toBe(200);
  });
});
