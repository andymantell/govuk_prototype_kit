/* global describe, it, before */
var fs = require('fs')
var assert = require('assert')

/**
 * Basic sanity check on the build tool
 */
describe('The dev server', function () {
  before(function (done) {
    require('grunt').tasks(['generate-assets'], {}, done)
  })

  it('should generate assets into the /public folder', function () {
    assert.doesNotThrow(function () {
      fs.accessSync('public/javascripts/application.js')
      fs.accessSync('public/images/favicon.ico')
      fs.accessSync('public/stylesheets/application.css')
    })
  })
})
