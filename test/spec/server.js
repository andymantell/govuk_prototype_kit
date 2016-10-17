/* global describe, it */
var request = require('supertest')

var app = require('../../server')

/**
 * Basic sanity checks on the dev server
 */
describe('The dev server', function () {
  it('should send with a well formed response for the index page', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200, done)
  })
})
