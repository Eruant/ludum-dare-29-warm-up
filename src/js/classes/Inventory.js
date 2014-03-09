/*globals module, require*/

var Container = require('./Container');

var Inventory = function () {
  this.containers = [];
};

Inventory.prototype.addContainer = function (name, type) {
  if (!name) {
    return;
  }
  this.containers.push(new Container(name, type));
};

Inventory.prototype.removeContainer = function (id) {
  if (!id) {
    return;
  }

  /*
  var i = this.containers.indexOf(id);
  if (i !== -1) {
    this.containers.splice(id, 1);
  }
  */
};

module.exports = Inventory;
