var Phaser = require('phaser/phaser');

var preload = function () {
  this.preloader = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloader');
  this.preloader.anchor.setTo(0.5, 0.5);
  this.load.setPreloadSprite(this.preloader);

  this.load.image('starfield', 'assets/starfield.png');
};

var create = function () {
  var tween = this.add.tween(this.preloader)
    .to({
      alpha: 0
    }, 1000, Phaser.Easing.Linear.None, true);
  tween.onComplete.add(this.startGame, this);
};

var startGame = function () {
  this.game.state.start('mainMenu', true, false);
};

module.exports = {
  preload: preload,
  create: create,
  startGame: startGame
};
