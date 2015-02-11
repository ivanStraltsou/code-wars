var paper = require('./bower_components/paper/dist/paper-core');

function TetrisTextRenderer(container) {
  this.canvas = document.createElement('pre');

  container.appendChild(this.canvas);

  this.render();
}

TetrisTextRenderer.options = {};

TetrisTextRenderer.prototype.clear = function() {
  this.canvas.innerHTML = '';
};

TetrisTextRenderer.prototype.render = function(matrix) {
  var text = [];

  this.clear();

  matrix = matrix || [];

  matrix.forEach(function(row, rowIndex) {

    row.forEach(function(item, columnIndex) {

      text.push('<span style="color:', item, '">', item ? 'x' : 'o', '</span>');

      if (columnIndex === row.length - 1) {
        text.push('\n');
      }

    });
  });

  this.canvas.innerHTML = text.join('');
};

module.exports = TetrisTextRenderer;
