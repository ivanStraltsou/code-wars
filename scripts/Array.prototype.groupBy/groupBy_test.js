describe('prototype', function() {
  it('default', function() {
    expect([1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy()).toEqual({
      1: [1, 1, 1],
      2: [2, 2],
      3: [3],
      4: [4],
      5: [5],
      6: [6]
    });
  });

  it('iterator', function() {
    expect([1, 2, 3, 2, 4, 1, 5, 1, 6]
        .groupBy(function(val) {
          return val % 3;
        }))
        .toEqual({
          0: [3, 6],
          1: [1, 4, 1, 1],
          2: [2, 2, 5]
        });
  });

  it('iterator stub', function() {
    expect([1, 3, 5, 7]
        .groupBy(function(val) {
          return 'a' + val;
        }))
        .toEqual({
          a1: [1],
          a3: [3],
          a5: [5],
          a7: [7]
        });
  });

  it('iterator context', function() {
    expect([1, 3, 5, 7]
        .groupBy(function(val) {
          return this.test + val;
        }, {test: 'context'}))
        .toEqual({
          context1: [1],
          context3: [3],
          context5: [5],
          context7: [7]
        });
  });

  it('empty result', function() {
    expect([]
        .groupBy(function(val) {
          return this.test + val;
        }, {test: 'context'}))
        .toEqual({});
  });
});
