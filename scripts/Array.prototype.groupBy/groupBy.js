Array.prototype.groupBy = Array.prototype.groupBy || function(iterator, context) {
  iterator = typeof iterator === 'function' ? iterator : function(value) {return value;};

  function group(groups, value) {
    var groupKey = iterator.call(context, value);

    (groups[groupKey] = groups[groupKey] || []).push(value);

    return groups;
  }

  return this.reduce(group, {});
};
