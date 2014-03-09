/**
 * base.js
 * This is the root file, which kicks off the game
 *
 * @author Matt Game <matt@littleball.co.uk>
 */

/*globals require*/

var Phaser = require('phaser/phaser'),
    boot = require('./scenes/boot'),
    preloader = require('./scenes/preloader'),
    mainMenu = require('./scenes/mainMenu'),
    level = require('./scenes/level');

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', null);

game.state.add('boot', boot, false);
game.state.add('preloader', preloader, false);
game.state.add('mainMenu', mainMenu, false);
game.state.add('level', level, false);

game.state.start('boot');
