/*globals describe, it, require*/

describe('Preloader', function () {

  var should = require('should'),
    preloader = require('../src/js/scenes/preloader.js');

  describe('module', function () {
    it('should exist', function () {
      should.exist(preloader);
    });
  });

  describe('preload', function () {
    it('should exist', function () {
      should.exist(preloader.preload);
    });
    it('should be a function', function () {
      (preloader.preload).should.be.a.Function;
    });
  });

  describe('create', function () {
    it('should exist', function () {
      should.exist(preloader.create);
    });
    it('should be a function', function () {
      (preloader.create).should.be.a.Function;
    });
  });

  describe('start game', function () {
    it('should exist', function () {
      should.exist(preloader.startGame);
    });
    it('should be a function', function () {
      (preloader.startGame).should.be.a.Function;
    });
  });
});

