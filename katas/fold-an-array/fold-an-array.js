function foldAnArray(array, foldingLevel) {
  var length = array.length;
  var foldedLength = Math.ceil(length * 0.5);
  
  array = Array.apply(null, new Array(foldedLength)).map(function(_, index) {
    var indexFromTheEnd = length - 1 - index;
    
    return array[index] + (indexFromTheEnd === index ? 0 : array[indexFromTheEnd]);
  });
  
  return --foldingLevel ? foldAnArray(array, foldingLevel) : array;
}
