function ArrayComprehension(options) {
  var generator, start, startIndex, step, parts;
  var output = [];

  function toNumber(item) {
    return Number(item);
  }

  function generate(start, end, step) {
    step = step || 1;

    return (end < start && step > 0) || (end > start && step < 0)?
           [] :
           Array.apply(null, new Array(Math.floor((end - start) / step) + 1)).map(function(value, index) {
             return start + step * index;
           });
  }

  // if generator is specified we expect the format to be correct
  if (options && options.generator && (generator = options.generator.trim())) {
    if ((parts = generator.split(ArrayComprehension.RANGE_SYMBOL)).length > 1) {
      start = parts[0].split(',').map(toNumber);
      startIndex = start.length - 1;
      step = startIndex ? start[startIndex] - start[0] : null;

      output = (startIndex ? [start[0]] : [])
          .concat(generate(start[startIndex], toNumber(parts[1]), step));

    } else {
      output = generator.split(',').map(toNumber);
    }
  }

  return output;
}

ArrayComprehension.RANGE_SYMBOL = '..';
