var preload = function () {
  this.load.image('preloader', 'assets/preloader.png');
};

var create = function () {
  this.input.maxPointers = 1;
  this.stage.disableVisibilityChange = true;
  if (this.game.device.desktop) {
  }
  this.game.state.start('preloader', true, false);
};

module.exports = {
  preload: preload,
  create: create
};
