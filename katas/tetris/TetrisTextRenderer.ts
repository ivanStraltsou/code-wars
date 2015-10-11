/// <reference path="TetrisRenderer.ts" />

import paper = require('./bower_components/paper/dist/paper-core.js');

module Tetris {

  export class TextRenderer implements Tetris.Renderer {
    public static options = {};

    canvas: HTMLPreElement;

    constructor(container: HTMLElement) {
      this.canvas = document.createElement('pre');

      container.appendChild(this.canvas);
    }

    render(matrix: Array = []): Tetris.TextRenderer {
      var text: Array = [];

      this.clean();

      matrix.forEach(function (row) {

        row.forEach(function (item, columnIndex) {

          text.push('<span style="color:', item, '">', item ? 'x' : 'o', '</span>');

          if (columnIndex === row.length - 1) {
            text.push('\n');
          }

        });
      });

      this.canvas.innerHTML = text.join('');

      return this;
    }

    clean(): Tetris.TextRenderer {
      this.canvas.innerHTML = '';

      return this;
    }
  }

}
