/*globals module*/

var Container = function (type) {
  this.type = type || 'box';
  this.maxValue = 10;
  this.value = 0;
};

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

module.exports = Container;
