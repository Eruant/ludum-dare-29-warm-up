/*globals describe, it, require*/

describe('Inventory', function () {

  var should = require('should'),
    Inventory = require('../src/js/classes/Inventory'),

    inventory = new Inventory();

  it('should exist', function () {
    should.exist(inventory);
  });

  describe('containers', function () {
    it('should exist', function () {
      should.exist(inventory.containers);
    });

    it('should be an array', function () {
      should(inventory.containers).be.an.instanceOf(Array);
    });
  });

  describe('add container', function () {

    it('should exist', function () {
      should.exist(inventory.addContainer);
    });

    it('should be a function', function () {
      should(inventory.addContainer).be.an.instanceOf(Function);
    });

    it('should require a name to be set', function () {
      var result = inventory.addContainer();
      should(result).equal(undefined);
    });

    it('should increase the length of containers by one', function () {
      var len = inventory.containers.length;
      inventory.addContainer('test');
      should(inventory.containers.length).equal(len + 1);
    });
  });

  describe('remove container', function () {

    it('should exist', function () {
      should.exist(inventory.removeContainer);
    });

    it('should be a function', function () {
      should(inventory.removeContainer).be.an.instanceOf(Function);
    });
    
    it('requires an id to be set', function () {
      var result = inventory.removeContainer();
      should(result).equal(undefined);
    });

    it('should decrease the legth of containers by one', function () {
      var len;

      inventory.addContainer('test');

      len = inventory.containers.length;
      inventory.removeContainer('test');
      should(inventory.containers.length).equal(len - 1 || 0);
    });
  });

  describe('add item', function () {
  });

  describe('remove item', function () {
  });

});
