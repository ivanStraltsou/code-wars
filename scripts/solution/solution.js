function solution(data) {
  if (!(data instanceof Array)) {
    throw new Error('Wrong input type is used');
  }

  var fieldLength = data.length,
      currentPosition = 0,
      steps = 0,
      memory = {},
      isInside;

  do {
    memory[currentPosition] = true;
    currentPosition += data[currentPosition];
    isInside = currentPosition < fieldLength;
    steps++;
  } while(isInside && !(currentPosition in memory) && currentPosition > 0)

  return isInside ? solution.cantResolveResult : steps;
}

solution.cantResolveResult = -1;
