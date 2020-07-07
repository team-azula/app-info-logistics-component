const server = require('../server/index.js');
const request = require('supertest');

describe('Server tests', () => {

  test('check to see if server responds with an app that matches the ID specified from a get request', done => {
    request(server)
    .get('/apps/15')
    .then(res => {
      expect(res.body.length).toEqual(1);
      expect(res.statusCode).toEqual(200);
      done();
    });
  });

  test('check to see if server responds with nothing to a get request with an ID that does not exist', done => {
    request(server)
    .get('/apps/105')
    .then(res => {
      expect(res.body.length).toEqual(0);
      expect(res.statusCode).toEqual(200);
      done();
    })
  })
});