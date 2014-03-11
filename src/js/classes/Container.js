/*globals module*/

/**
 * @class Container
 * An object to hold either a solid, liquid or gas resource
 *
 * @author Matt Gale <matt@littleball.co.uk>
 * @constructor
 * @param {String} type - The type of resource this container will hold
 * @param {String} form - Either "solid", "gas" or "liquid"
 */
var Container = function (type, form) {

  if (!type) {
    throw new Error('Container requires a type');
  }
  
  if (form) {
    if (['solid', 'gas', 'liquid'].indexOf(form) === -1) {
      throw new Error('Container type must equal "solid", "gas" or "liquid".');
    }
  }
  // TODO add a name of the resouce - or change type

  this.form = form || 'solid';
  this.type = type;
  this.maxValue = 10;
  this.value = 0;
};

/**
 * @method setMaxValue
 * Set the largest value this container can hold
 *
 * @param {Number} value - max value this container can hold
 * @return {Number} any extra resources that will no longer fit in the container
 */
Container.prototype.setMaxValue = function (value) {

  var overspill = 0;

  if (this.value > value) {
    overspill = this.value - value;
  }

  this.maxValue = value;

  return overspill;
};

/**
 * @method addValue
 * Add extra resources to this container
 *
 * @param {Number} value - quantity of resource to add
 * @return {Number} any extra resources that will not fit in the container
 */
Container.prototype.addValue = function (value) {

  var overspill = 0;

  this.value += value;

  if (this.value > this.maxValue) {
    overspill = this.value - this.maxValue;
    this.value = this.maxValue;
  }

  return overspill;
};

/**
 * @method removeValue
 * Remove resoures from this container
 *
 * @param {Number} value - quantity of resource to take out
 * @return {Number} quanity of resources removed
 */
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
