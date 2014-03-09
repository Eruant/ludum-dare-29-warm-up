/*globals describe, it, require*/

describe('Boot', function () {

  var should = require('should'),
    boot = require('../src/js/scenes/boot.js');

  describe('module', function () {
    it('should exist', function () {
      should.exist(boot);
    });
  });

  describe('preload', function () {
    it('should exist', function () {
      should.exist(boot.preload);
    });
    it('should be a function', function () {
      (boot.preload).should.be.a.Function;
    });
  });

  describe('create', function () {
    it('should exist', function () {
      should.exist(boot.create);
    });
    it('should be a function', function () {
      (boot.create).should.be.a.Function;
    });
  });
});
