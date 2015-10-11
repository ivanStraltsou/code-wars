/// <reference path="TetrisFigure.ts" />

function transpose(matrix: any[][]): any[][] {

  return matrix[0].map((notUsed, columnIndex: number) -> matrix.map((row: any[]) -> row[columnIndex]));
}

function getRandomFromCollection(collection: Array): any {

  return collection[getRandom(collection.length)];
}

function getRandom(max: number): number {
  return Math.floor(Math.random() * max);
}

function DummyArray(length: number): any[] {
  return Array.apply(null, Array(length));
}

interface Vector {
  x: number;
  y: number;
}

module Tetris {

  export class Engine {
    public static options = {
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

    m: number;
    n: number;
    intervalId: number;
    figure: Tetris.Figure;
    score: number = 0;
    options: Object;

    private currentModel_: number[][];
    private renderModel_: number[][];

    constructor(public m: number, public n: number, public options: Object = {}) {
    }

    copyModel(): number[][] {
      return this.currentModel_.map((row) -> [].concat(row));
    }

    toArray(): number[][] {
      return this.renderModel_;
    }

    start(): Tetris.Engine {

      this.currentModel_ = this.generateEmptyField();
      this.renderModel_ = this.copyModel();

      this.dropNewFigure();

      return this;
    }

    generateEmptyField(): number[][] {
      return (new DummyArray(this.m)).map(() => (new DummyArray(this.n)).map(() -> 0));
    }

    dropNewFigure() {
      var figure = getRandomFromCollection(Tetris.Engine.options.figures);

      clearInterval(this.intervalId);

      this.figure = new Tetris.Figure(
        figure,
        getRandomFromCollection(Tetris.Engine.options.colors), {
          x: Math.floor(this.n * 0.5),
          y: 0
        }
      );

      if (this.move({x: 0, y: 0})) {
        this.intervalId = setInterval(() => {
          if (!this.move()) {
            this.saveStep();
            this.dropNewFigure();
          }
        }, 500);
      } else {
        if (confirm('Game over. Restart?')) {
          this.start();
        }
      }
    }

    move(vector: Vector = {x: 0, y: 1}): Tetris.Engine {
      var isValidVector: boolean;
      var x = this.figure.x0;

      if (vector.y < 0) {
        vector.y = 0;
        this.figure.model = transpose((this.figure.model));
      }

      if (x + vector.x < 0 || this.figure.x + vector.x + this.figure.width > this.n) {
        if (vector.x) {
          vector.x = 0;
        } else {
          vector.x = this.n - this.figure.x - this.figure.width;
        }
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
    }

    saveStep() {
      var killedRows = 0;

      this.figure.forEachCell((row, cell, i, j) => {
        var x = j + this.figure.x;
        var y = i + this.figure.y;
        var matrixRow = y < this.currentModel_.length && this.currentModel_[y];

        if (cell) {
          matrixRow[x] = cell;
        }

        if (matrixRow && j === row.length - 1 && matrixRow.reduce(function (a, b) {
            return a && b;
          }, true)) {

          matrixRow.forEach(function (cell, index) {
            matrixRow[index] = 0;
          });

          killedRows += 1;
        }
      });

      // score is number of cells multiplied x2 for 2 rows, x3 for 3 rows, etc.
      this.score += killedRows * this.n * killedRows;
    }

    updateMatrix() {
      this.renderModel_ = this.copyModel();

      this.figure.forEachCell((row, cell, i, j) => {
        var x = j + this.figure.x;
        var y = i + this.figure.y;

        if (cell) {
          this.renderModel_[y][x] = cell;
        }
      });
    }

    validate(vector) {
      var valid = true;

      valid = valid && (this.figure.y + vector.y + this.figure.height <= this.m);

      this.figure.forEachCell((row, cell, m, n) => {
        var x = n + this.figure.x + vector.x;
        var y = m + this.figure.y + vector.y;

        if (cell) {
          valid = valid && !this.currentModel_[y][x];
        }

      });

      return valid;
    }
  }
}

function Tetris(element, m, n, Renderer) {
  if (!element || element.nodeType !== 1) {
    throw new Error('Wrong container type or container is not set.');
  }

  this.m = this.getValidSize(m, Tetris.defaults.rows);
  this.n = this.getValidSize(n, Tetris.defaults.columns);

  this.container = element;

  this.renderer = new Renderer(this.container, this.m, this.n);

  this.init();
  this.refreshCanvas();
}

Tetris.prototype.refreshCanvas = function () {
  this.renderer.render(this.engine.toArray());
};

Tetris.prototype.init = function () {
  this.engine = new TetrisEngine(this.m, this.n, {
    onTick: {
      callback: this.refreshCanvas,
      context: this
    }
  });

  this.engine.start();
};

Tetris.prototype.move = function (vector) {
  return this.engine.move(vector);
};

Tetris.prototype.getValidSize = function (value, alternative) {

  return (value = parseInt(value)) && value > 0 ? value : alternative;
};

Tetris.defaults = {
  columns: 10,
  rows: 20
};

module.exports = Tetris;