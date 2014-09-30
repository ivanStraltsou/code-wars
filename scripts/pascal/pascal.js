function pascal(depth) {
  var pyramid = [];

  depth = Number(depth);

  if (depth) {
    Array.apply(null, Array(depth)).reduce(function(lastLevel, currentLevel, levelIndex) {
      var currentLevelLength = levelIndex + 1;

      currentLevel = Array.apply(null, Array(currentLevelLength))
          .map(function(value, index) {

            // track boundary indexes
            return index > 0 && index < levelIndex ?
                   lastLevel[index - 1] + lastLevel[index] :
                   1;
          });

      pyramid.push(currentLevel);

      return currentLevel;
    }, [1]);
  }

  return pyramid;
}
