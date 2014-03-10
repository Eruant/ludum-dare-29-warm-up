/*globals describe, it, require*/

describe('Resource', function () {

  var should = require('should'),
    Resource = require('../src/js/classes/Resource');

  describe('constructor', function () {

    it('should throw error parameters are not set', function () {
      should(function () {
        var resource = new Resource();
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

    it('should have take the form sent in', function () {
      var resource = new Resource('water', 'liquid');
      should(resource.form).equal('liquid');
    });

    it('should only take a form of [solid, liquid, gas]', function () {
      should(function () {
        var resource = new Resource('water', 'solidish');
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

  describe('addValue', function () {

    // TODO
  });

  describe('removeValue', function () {

    // TODO

    it('should not be less than 1', function () {
      var resource = new Resource('water', 'liquid');
      resource.removeValue(2);
      should(resource.value).be.above(0);
    });

  });

});

/*

   have a type
   have a form [solid, liquid, gas]
   have a quantity / value?

*/
