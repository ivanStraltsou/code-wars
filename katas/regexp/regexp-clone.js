RegExp.prototype.clone = function() {
  var cloned = new RegExp(this);

  cloned.lastIndex = this.lastIndex;

  return cloned;
};

RegExp.clone = function(regex) {
  return regex.clone();
};
