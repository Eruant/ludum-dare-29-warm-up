/*globals module, require*/

var Container = require('./Container');

var Inventory = function () {
  this.containers = [];
};

Inventory.prototype.addContainer = function (id, type) {
  if (!id) {
    return;
  }
  this.containers.push({
    id: id,
    data: new Container(type)
  });
};

Inventory.prototype.removeContainer = function (id) {
  if (!id) {
    return;
  }

  var returnContainers = [];

  for (var i = 0, iL = this.containers.length; i < iL; i++) {
    if (this.containers[i].id !== id) {
      returnContainers.push(this.containers[i]);
    }
  }

  this.containers = returnContainers;
};

module.exports = Inventory;
