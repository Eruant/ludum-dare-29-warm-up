/*globals describe, it, require*/

describe('Zones', function () {

  var should = require('should'),
    Zones = require('../src/js/classes/Zones');

  describe('constructor', function () {

    it('should exist', function () {
      should(function () {
        var zones = new Zones();
        return zones;
      }).not.throw();
    });

    it('should have an array of zones', function () {
      var zones = new Zones();
      should(zones.zones).be.an.instanceOf(Array);
    });

  });

  describe('addZone', function () {
    
    it('should have a start position', function () {

      var zones = new Zones();
      zones.addZone({
        x: 12,
        y: 24
      });

      should(zones.zones[0].startPosition.x).be.an.instanceOf(Number);
      should(zones.zones[0].startPosition.y).be.an.instanceOf(Number);

    });

  });

});

/**
 * - constructor
 *   - be given a start point
 *   - gas levels
 * - getArea
 *   - tests for where the walls are
 */
