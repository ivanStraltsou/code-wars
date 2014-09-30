describe('validBraces test', function() {
  it('depth = 5, result length test', function() {
    expect(pascal(5).length).toBe(5);
  });

  it('0', function() {
    expect(pascal(0)).toEqual([]);
  });

  it('1', function() {
    expect(pascal(1)).toEqual([
      [1]
    ]);
  });

  it('2', function() {
    expect(pascal(2)).toEqual([
      [1],
      [1, 1]
    ]);
  });

  it('depth = 5, result length test', function() {
    expect(pascal(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
  });

  it('depth = 6, result length test', function() {
    expect(pascal(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
  });

  it('depth = 5', function() {
    expect(pascal(5).toString()).toBe('1,1,1,1,2,1,1,3,3,1,1,4,6,4,1');
  });
});
