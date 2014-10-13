function solution(data) {
  var fieldLength = data.length,
      steps = fieldLength,
      currentPosition = 0,
      memory,
      isInside;

  if (fieldLength > 1) {
    steps = 0;
    memory = {};

    do {
      memory[currentPosition] = true;
      currentPosition += data[currentPosition];
      isInside = currentPosition < fieldLength;
      console.log(data[currentPosition])
      // increase steps number
      steps++;
    } while(isInside && !memory[currentPosition] && currentPosition > 0)

    steps = isInside ? -1 : steps;
  }

  return steps;
}
