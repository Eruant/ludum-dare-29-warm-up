/*globals describe, it, require*/

describe('Inventory', function () {

  var should = require('should'),
    Inventory = require('../src/js/classes/Inventory');

  it('should exist', function () {
    var inventory = new Inventory();
    should.exist(inventory);
  });

  describe('containers', function () {
    var inventory = new Inventory();
    it('should exist', function () {
      should.exist(inventory.containers);
    });

    it('should be an array', function () {
      should(inventory.containers).be.an.instanceOf(Array);
    });
  });

  describe('add container', function () {
    var inventory = new Inventory();

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
    var inventory = new Inventory();

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
      inventory.addContainer('itemOne');
      should(inventory.containers).lengthOf(1);

      inventory.addContainer('itemTwo');
      should(inventory.containers).lengthOf(2);

      inventory.removeContainer('itemOne');
      should(inventory.containers).lengthOf(1);

      inventory.removeContainer('itemTwo');
      should(inventory.containers).lengthOf(0);
    });
  });

});
