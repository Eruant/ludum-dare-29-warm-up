var Phaser = require('phaser/phaser');

var menu = {
  create: function () {
    this.background = this.add.tileSprite(0, 0, 1024, 768, 'starfield');
    this.background.alpha = 0;

    var tween = this.add.tween(this.background)
      .to({
        alpha: 1
      }, 1000, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.addInteraction, this);

    this.bgSpeed = { x: 0.1, y: 0.2 };
  },

  update: function () {
    this.bgSpeed.x += (Math.random() - 0.5) * 0.01;
    this.bgSpeed.y += (Math.random() - 0.5) * 0.01;
    if (this.bgSpeed.x > 1) {
      this.bgSpeed.x = 1;
    } else if (this.bgSpeed.x < -1) {
      this.bgSpeed.x = -1;
    }
    if (this.bgSpeed.y > 1) {
      this.bgSpeed.y = 1;
    } else if (this.bgSpeed.y < -1) {
      this.bgSpeed.y = -1;
    }
    this.background.tilePosition.x += this.bgSpeed.x;
    this.background.tilePosition.y += this.bgSpeed.y;
  },

  addInteraction: function () {
    this.input.onDown.addOnce(this.newGame, this);
  },

  newGame: function () {
    var tween = this.add.tween(this.background)
      .to({
        alpha: 0
      }, 1000, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.startNewGame, this);
  },

  startNewGame: function () {
    this.game.state.start('level', false, true);
  }
};

module.exports = menu;
