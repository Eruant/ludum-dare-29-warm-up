/*globals describe, it, require*/

describe('Container', function () {

  var should = require('should'),
    Container = require('../src/js/classes/Container');

  describe('constructor', function () {

    it('should have default type of box', function () {
      var container = new Container();
      should(container.type).equal('box');
    });

    it('should have type defined', function () {
      var container = new Container('gas');
      should(container.type).equal('gas');
    });

    it('should only accept "box", "gas", "liquid"', function () {
      (function () {
        var container = new Container('test');
      }).should.throw();
    });

    it('should have a max storage capacity set', function () {
      var container = new Container();
      should(container.maxValue).be.above(0).and.an.instanceOf(Number);
    });

    it('should have a quanitity of storage set', function () {
      var container = new Container();
      should(container.value).within(0, container.maxValue);
    });

    it('should default the value to 0', function () {
      var container = new Container();
      should(container.value).equal(0);
    });

  });

  describe('setMaxValue', function () {

    it('should change the maxValue', function () {
      var container = new Container();
      container.setMaxValue(10);
      should(container.maxValue).equal(10);

      container.setMaxValue(20);
      should(container.maxValue).equal(20);
    });

    it('should return the over splill if reducing the value to more than is allowed', function () {
      var container, overspill;
      container = new Container();
      container.setMaxValue(20);
      container.addValue(15);
      overspill = container.setMaxValue(10);
      should(overspill).equal(5);
    });
  });

  describe('addValue', function () {
    it('should be able to add content', function () {
      var container = new Container();
      container.setMaxValue(20);
      container.addValue(12);
      should(container.value).equal(12);
    });

    it('should return to over spill, when full of content', function () {
      var container, spill;
      container = new Container();
      container.setMaxValue(10);
      spill = container.addValue(12);
      should(spill).equal(2);
    });

    it('should not over fill', function () {
      var container = new Container();
      container.setMaxValue(10);
      container.addValue(12);
      should(container.value).equal(10);
    });
  });

  describe('removeValue', function () {

    it('should reduce the content when taking out', function () {
      var container = new Container();
      container.setMaxValue(10);
      container.addValue(8);
      container.removeValue(6);
      should(container.value).equal(2);
    });

    it('should not take out more than exists in the first place', function () {
      var container = new Container();
      container.setMaxValue(10);
      container.addValue(8);
      container.removeValue(10);
      should(container.value).equal(0);
    });

    it('should only give you what is available', function () {
      var container, returnValue;
      container = new Container();
      container.setMaxValue(10);
      container.addValue(8);
      returnValue = container.removeValue(10);
      should(returnValue).equal(8);
    });

  });

});
