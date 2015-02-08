function digital_root(number) {
  var result = String(number).split('').reduce(function(sum, digit) {
    return sum + Number(digit);
  }, 0);

  return result >= 1e1 ? digital_root(result) : result;
}
