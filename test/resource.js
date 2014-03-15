/*globals describe, it, require*/

describe('Resource', function () {

  var should = require('should'),
    Resource = require('../src/js/classes/Resource');

  describe('constructor', function () {

    it('should throw error parameters are not set', function () {
      should(function () {
        var resource = new Resource();
        return resource;
      }).throw();
    });

    it('should set a type', function () {
      var resource = new Resource('water');
      should(resource.type).equal('water');
    });

    it('should have a form (default "solid")', function () {
      var resource = new Resource('water');
      should(resource.form).equal('solid');
    });

    it('should take a new value', function () {
      var resource = new Resource('water', 'liquid', 10);
      should(resource.value).equal(10);
    });

    it('should have take the form sent in', function () {
      var resource = new Resource('water', 'liquid');
      should(resource.form).equal('liquid');
    });

    it('should only take a form of [solid, liquid, gas]', function () {
      should(function () {
        var resource = new Resource('water', 'solidish');
        return resource;
      }).throw();
    });

    it('should have a value', function () {
      var resource = new Resource('water', 'liquid');
      should(resource.value).be.an.instanceOf(Number);
    });

    it('should have a default value of 1', function () {
      var resource = new Resource('water', 'liquid');
      should(resource.value).equal(1);
    });
  });

  describe('setValue', function () {

    it('should throw an error if no value is set', function () {
      should(function () {
        var resource = new Resource('dirt');
        resource.setValue();
      }).throw();
    });

    it('should change the value of the resource', function () {
      var resource = new Resource('water', 'liquid');
      resource.setValue(5);
      should(resource.value).equal(5);
    });
  });

  describe('addValue', function () {

    it('should add the value to the value', function () {
      var resource = new Resource('water', 'liquid');
      resource.addValue(10);
      should(resource.value).equal(11);
    });
  });

  describe('removeValue', function () {

    it('should expect a value to be removed', function () {
      should(function () {
        var resource = new Resource('water', 'liquid');
        resource.removeValue();
      }).throw();

    });

    it('should return the value specified or however many is left', function () {
      var resource = new Resource('water', 'liquid', 10);
      var resourceTaken = resource.removeValue(6);
      should(resourceTaken).equal(6);
      var anotherResourceTaken = resource.removeValue(20);
      should(anotherResourceTaken).equal(4);
    });

    it('should not be less than 1', function () {
      var resource = new Resource('water', 'liquid');
      resource.removeValue(2);
      should(resource.value).be.above(-1);
    });

  });

});
