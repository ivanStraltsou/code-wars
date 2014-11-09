function checkMate(cells) {
  var isArray = Array.isArray,

      /**
       * @description
       * Returns int value for cell (charCode + index). I hope input will have an appropriate format.
       * Char codes:
       * ["a", .., "h"] => [97, .., 104]
       * ["A", .., "H"] => [65, .., 72]
       *
       * @param {string} cell The cell code. e.g. "A1", "C5"
       * @returns {number}
       */
      getValue = function(cell) {
        return cell[0].charCodeAt(0) + parseInt(cell[1], 10);
      },
      toColor = function(cell) {
        return checkMate[getValue(cell) % 2 ? 'evenColor' : 'oddColor'];
      },
      processCell = function(cell) {
        return cell.map(function(value) {
          return isArray(value) ? processCell(value) : toColor(value);
        });
      };

  if (!isArray(cells)) {
    throw new Error('Wrong input format');
  }

  return processCell(cells);
}

checkMate.evenColor = 'white';
checkMate.oddColor = 'black';
