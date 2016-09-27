function buildTower(numberOfFloors) {
  var tower, width, lastRow;
  
  if (!numberOfFloors || isNaN(numberOfFloors) || typeof(numberOfFloors) !== 'number') {
    return null;
  }
  
  tower = Array.apply(null, new Array(numberOfFloors));
  width = numberOfFloors ? 2 * (numberOfFloors - 1) + 1: 0;
  lastRow = Array.apply(null, new Array(width)).map(function() {return '*';});
  
  tower.reduce(function(previousRow, value, index) {
    if (index) {
      previousRow[index - 1] = previousRow[width - index] = ' ';
    }
    
    tower[index] = previousRow.join('');
    
    return previousRow;
  }, lastRow);
  
  return tower.reverse();
}
