/// <reference path="Tetris.ts" />

var Tetris = require('./tetris');

var container1 = document.getElementById('tetris1');
var container2 = document.getElementById('tetris2');

var tetris1 = new Tetris(container1, 20, 10);
var tetris2 = new Tetris(container2, 20, 10, require('./text-renderer'));

var MOVE_MATRIX = {
  '39': {x: 1, y: 0},
  '37': {x: -1, y: 0},
  '40': {x: 0, y: 1},
  '38': {x: 0, y: -1}
};

function getMoveListener(tetris) {

  return function(e) {
    var vector = MOVE_MATRIX[e.keyCode];

    if (vector) {
      tetris.move(vector);
    }
  }
}

container1.focus();

container1.addEventListener('keydown', getMoveListener(tetris1));
container2.addEventListener('keydown', getMoveListener(tetris2));
