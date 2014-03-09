/*globals describe, it, require*/

describe('Level', function () {

  var should = require('should'),
    level = require('../src/js/scenes/level.js');

  describe('module', function () {
    it('should exist', function () {
      should.exist(level);
    });
  });

  describe('create', function () {
    it('should exist', function () {
      should.exist(level.create);
    });
    it('should be a function', function () {
      (level.create).should.be.a.Function;
    });
  });

  describe('update', function () {
    it('should exist', function () {
      should.exist(level.update);
    });
    it('should be a function', function () {
      (level.update).should.be.a.Function;
    });
  });
});
