/*globals describe, it, require*/

describe('Main Menu', function () {

  var should = require('should'),
    mainMenu = require('../src/js/scenes/mainMenu.js');

  describe('module', function () {
    it('should exist', function () {
      should.exist(mainMenu);
    });
  });

  describe('create', function () {
    it('should exist', function () {
      should.exist(mainMenu.create);
    });
    it('should be a function', function () {
      (mainMenu.create).should.be.a.Function;
    });
  });

  describe('update', function () {
    it('should exist', function () {
      should.exist(mainMenu.update);
    });
    it('should be a function', function () {
      (mainMenu.update).should.be.a.Function;
    });
  });

});
