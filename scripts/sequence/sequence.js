function sequence() {
  var executionQueue = Array.prototype.concat.apply([], arguments);

  return function() {
    var result = executionQueue.shift().apply(null, arguments);

    if (executionQueue.length) {
      executionQueue[0] = executionQueue[0].bind(null, result);
    }

    return executionQueue.length ? sequence.apply(null, executionQueue) : result;
  }
}