var paper = require('./bower_components/paper/dist/paper-core');

function TetrisCanvasRenderer(container, m, n) {
  this.canvas = document.createElement('canvas');

  this.canvas.setAttribute('width', n * TetrisCanvasRenderer.options.itemSize);
  this.canvas.setAttribute('height', m * TetrisCanvasRenderer.options.itemSize);

  this.m = m;
  this.n = n;
  this.itemSize = TetrisCanvasRenderer.options.itemSize;

  container.appendChild(this.canvas);

  this.project = new paper.Project(this.canvas);

  this.render();
}

TetrisCanvasRenderer.options = {
  gridColor: '#dedede',
  itemSize: 25
};

TetrisCanvasRenderer.prototype.renderGrid = function() {
  var i = this.m;

  while (i--) {
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = TetrisCanvasRenderer.options.gridColor;
    var y = 500 / this.m * i;
    var start = new paper.Point(0, y);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([250, 0]));
  }

  i = this.n;

  while (i--) {
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = '#dedede';
    var x = 250 / this.n * i;
    var start = new paper.Point(x, 0);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([0, 500]));
  }

};

TetrisCanvasRenderer.prototype.clear = function() {
  this.project.getActiveLayer().clear();
};

TetrisCanvasRenderer.prototype.render = function(matrix) {
  var itemSize = this.itemSize;

  this.clear();
  this.renderGrid();

  matrix = matrix || [];

  matrix.forEach(function(row, rowIndex) {

    row.forEach(function(item, columnIndex) {

      if (item) {
        var rect = new paper.Rectangle(columnIndex * itemSize, rowIndex * itemSize, itemSize - 1, itemSize - 1);
        var path = new paper.Path.Rectangle(rect);
        path.style = {
          fillColor: item
        };
      }

    });
  });

  this.project.getActiveLayer().view.draw();
};

module.exports = TetrisCanvasRenderer;
