var Container = require('./Container');

/**
 * @class Inventory
 * An object for storing resources
 * 
 * @author Matt Gale <matt@littleball.co.uk>
 * @constructor
 */
var Inventory = function () {
  this.containers = [];
};

/**
 * @method addContainer
 * Pushes a new container onto the containers array
 *
 * @param {String} id - a reference to the container
 * @param {String} type - the type of container to create
 */
Inventory.prototype.addContainer = function (id, type, form) {
  if (!id) {
    throw new Error('Inventory requires an id to be set');
  }
  this.containers.push({
    id: id,
    data: new Container(type, form)
  });
};

/**
 * @method removeContainer
 * Removes a container from the containers array
 *
 * @param {String} id - a reference to the container to remove
 */
Inventory.prototype.removeContainer = function (id) {
  if (!id) {
    throw new Error('No "id" supplied');
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
