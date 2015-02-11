var TetrisCanvasRenderer = require('./canvas-renderer');

function transpose(matrix) {
  return matrix[0].map(function(notUsed, columnIndex) {

    return matrix.map(function(row) {

      return row[columnIndex];
    });
  });
}

function getRandomFromCollection(collection) {
  return collection[getRandom(collection.length)];
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function DummyArray(length) {
  return Array.apply(null, Array(length));
}

function TetrisEngine(m, n, options) {

  this.m = m;
  this.n = n;
  this.score = 0;

  this.options = options || {};
}

TetrisEngine.prototype.copyModel = function() {
  return this.currentModel.map(function(row) {
    return [].concat(row);
  });
};

TetrisEngine.prototype.toArray = function() {
  return this.renderModel;
};

TetrisEngine.prototype.start = function() {
  var n = this.n;

  this.currentModel = (new DummyArray(this.m)).map(function() {
    return (new DummyArray(n)).map(function() {
      return 0;
    });
  });

  this.renderModel = this.copyModel();

  this.dropNewFigure();
};

TetrisEngine.prototype.dropNewFigure = function() {
  var self = this;
  var figure = getRandomFromCollection(TetrisEngine.options.figures);

  clearInterval(this.interval);

  this.figure = new Figure({
    model: figure,
    color: getRandomFromCollection(TetrisEngine.options.colors),
    position: {
      x: Math.floor(this.n * 0.5),
      y: 0
    }
  });

  if (this.move({x: 0, y: 0})) {
    this.interval = setInterval(function() {
      if (!self.move()) {
        self.saveStep();
        self.dropNewFigure();
      }
    }, 500);
  } else {
    if (confirm('Game over. Restart?')) {
      this.start();
    }
  }
};

TetrisEngine.prototype.move = function(vector) {
  var isValidVector;
  var x = this.figure.getX0();

  vector = vector ? {x: vector.x, y: vector.y} : {x: 0, y: 1};

  if (vector.y < 0) {
    this.figure.model = transpose((this.figure.model));
  }

  if (x + vector.x < 0 || this.figure.getX() + vector.x + this.figure.getWidth() > this.n) {
    vector.x = 0;
  }

  if (isValidVector = this.validate(vector)) {
    this.figure.position.x += vector.x;
    this.figure.position.y += vector.y;

    this.updateMatrix();

    if (this.options.onTick) {
      this.options.onTick.callback.apply(this.options.onTick.context, arguments);
    }
  }

  return isValidVector;
};

TetrisEngine.prototype.saveStep = function() {
  var killedRows = 0;

  this.figure.forEachCell(function(row, cell, i, j) {
    var x = j + this.figure.getX();
    var y = i + this.figure.getY();
    var matrixRow = y < this.currentModel.length && this.currentModel[y];

    if (cell) {
      matrixRow[x] = cell;
    }

    if (matrixRow && j === row.length - 1 && matrixRow.reduce(function(a, b) {
        return a && b;
      }, true)) {

      matrixRow.forEach(function(cell, index) {
        matrixRow[index] = 0;
      });

      killedRows += 1;
    }
  }, this);

  // score is number of cells multiplied x2 for 2 rows, x3 for 3 rows, etc.
  this.score += killedRows * this.n * killedRows;
};

TetrisEngine.prototype.updateMatrix = function() {
  this.renderModel = this.copyModel();

  this.figure.forEachCell(function(row, cell, i, j) {
    var x = j + this.figure.getX();
    var y = i + this.figure.getY();

    if (cell) {
      this.renderModel[y][x] = cell;
    }
  }, this);
};

TetrisEngine.prototype.validate = function(vector) {
  var valid = true;

  valid = valid && (this.figure.getY() + vector.y + this.figure.getHeight() <= this.m);

  this.figure.forEachCell(function(row, cell, m, n) {
    var x = n + this.figure.getX() + vector.x;
    var y = m + this.figure.getY() + vector.y;

    if (cell) {
      valid = valid && !this.currentModel[y][x];
    }

  }, this);

  return valid;
};

function Figure(options) {
  this.model = options.model;
  this.color = options.color;

  this.position = options.position;

  this.setColor();
}

Figure.prototype.forEachCell = function(callback, context) {
  this.model.forEach(function(row, rowIndex) {
    row.forEach(function(item, columnIndex) {
      callback.call(context, row, item, rowIndex, columnIndex);
    })
  });
};

Figure.prototype.setColor = function() {

  this.forEachCell(function(row, item, m, n) {
    row[n] = item ? this.color : 0;
  }, this);
};

Figure.prototype.getX = function() {
  return this.position.x;
};

Figure.prototype.getX0 = function() {
  var x0 = this.model[0].length;

  this.forEachCell(function(row, cell, i, j) {
    if (cell) {
      x0 = Math.min(x0, j);
    }
  });

  return x0 + this.getX();
};

Figure.prototype.getX1 = function() {
  var x1 = 0;

  this.forEachCell(function(row, cell, i, j) {
    if (cell) {
      x1 = Math.max(x1, j);
    }
  });

  return x1 + this.getX();
};

Figure.prototype.getY = function() {
  return this.position.y;
};

Figure.prototype.getWidth = function() {
  return this.getX1() - this.getX0() + 1;
};

Figure.prototype.getHeight = function() {
  var height = 0;

  this.forEachCell(function(row, cell, i, j) {
    if (cell) {
      height = Math.max(height, i + 1);
    }
  });

  return height;
};

TetrisEngine.options = {
  figures: [
    [
      [1, 1],
      [1, 1]
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
    ],
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ]
  ],
  colors: ['#008744', '#0057e7', '#d62d20', '#ffa700', '#dddddd']
};

function Tetris(element, m, n, Renderer) {
  if (!element || element.nodeType !== 1) {
    throw new Error('Wrong container type or container is not set.');
  }

  this.m = this.getValidSize(m, Tetris.defaults.rows);
  this.n = this.getValidSize(n, Tetris.defaults.columns);

  this.container = element;

  this.renderer = new (Renderer || TetrisCanvasRenderer)(this.container, this.m, this.n);

  this.init();
  this.refreshCanvas();
}

Tetris.prototype.refreshCanvas = function() {
  this.renderer.render(this.engine.toArray());
};

Tetris.prototype.init = function() {
  this.engine = new TetrisEngine(this.m, this.n, {
    onTick: {
      callback: this.refreshCanvas,
      context: this
    }
  });

  this.engine.start();
};

Tetris.prototype.move = function(vector) {
  return this.engine.move(vector);
};

Tetris.prototype.getValidSize = function(value, alternative) {

  return (value = parseInt(value)) && value > 0 ? value : alternative;
};

Tetris.defaults = {
  columns: 10,
  rows: 20
};

module.exports = Tetris;