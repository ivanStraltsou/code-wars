module Tetris {

  export interface Point {
    x: number;
    y: number;
  }

  export class Figure {
    model: number[][];
    color: number;
    position: Tetris.Point;

    constructor(public model: number[][], public color: number, public position: Tetris.Point) {
      this.setColor();
    }

    forEachCell(callback: Function, context: Object = null) {
      this.model.forEach(function (row, rowIndex) {
        row.forEach(function (item, columnIndex) {

          callback.call(context, row, item, rowIndex, columnIndex);

        });
      });
    }

    setColor() {

      this.forEachCell(function (row, item, m, n) {
        row[n] = item ? this.color : 0;
      }, this);
    }

    get x() {
      return this.position.x;
    }

    get x0() {
      var x0 = this.model[0].length;

      this.forEachCell(function (row, cell, i, j) {
        if (cell) {
          x0 = Math.min(x0, j);
        }
      });

      return x0 + this.x;
    }

    get x1() {
      var x1 = 0;

      this.forEachCell(function (row, cell, i, j) {
        if (cell) {
          x1 = Math.max(x1, j);
        }
      });

      return x1 + this.x;
    }

    get y() {
      return this.position.y;
    }

    get width() {
      return this.x1 - this.x0 + 1;
    }

    get height() {
      var height = 0;

      this.forEachCell(function (row, cell, i, j) {
        if (cell) {
          height = Math.max(height, i + 1);
        }
      });

      return height;
    }
  }
}
