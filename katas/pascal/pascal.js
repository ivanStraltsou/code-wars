function pascal(depth) {
  var pyramid = [],
      dummyArray = function(length) {
        return Array.apply(null, Array(length));
      };

  depth = Number(depth);

  if (depth) {
    dummyArray(depth).reduce(function(lastLevel, currentLevel, levelIndex) {

      // create level
      currentLevel = dummyArray(levelIndex + 1).map(function(value, index) {

        // track boundary indexes
        return (index > 0 && index < levelIndex) ? lastLevel[index - 1] + lastLevel[index] : 1;
      });

      // save it
      pyramid.push(currentLevel);

      // pass to create the next one
      return currentLevel;
    }, [1]);
  }

  return pyramid;
}
