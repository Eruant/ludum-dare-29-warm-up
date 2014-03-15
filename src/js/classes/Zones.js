function Zones() {
  this.zones = [];
}

Zones.prototype.addZone = function (startPosition) {
  this.zones.push({
    startPosition: startPosition
  });
};

module.exports = Zones;
