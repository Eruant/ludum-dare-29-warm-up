/**
 * @class Container
 * An object to hold either a solid, liquid or gas resource
 *
 * @author Matt Gale <matt@littleball.co.uk>
 */

/*globals module*/

var Container = function (type) {
  
  if (type) {
    if (['box', 'gas', 'liquid'].indexOf(type) === -1) {
      throw new Error('Container type must equal "box", "gas" or "liquid".');
    }
  }

  this.type = type || 'box';
  this.maxValue = 10;
  this.value = 0;
};

/**
 * @method setMaxValue
 */
Container.prototype.setMaxValue = function (value) {

  var overspill = 0;

  if (this.value > value) {
    overspill = this.value - value;
  }

  this.maxValue = value;

  return overspill;
};

Container.prototype.addValue = function (quantity) {

  var overspill = 0;

  this.value += quantity;

  if (this.value > this.maxValue) {
    overspill = this.value - this.maxValue;
    this.value = this.maxValue;
  }

  return overspill;
};

Container.prototype.removeValue = function (quantity) {

  var currentValue = this.value;

  this.value -= quantity;

  if (this.value < 0) {
    this.value = 0;
    return currentValue;
  }

  return this.value;
};

module.exports = Container;
