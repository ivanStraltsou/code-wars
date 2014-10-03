describe('pascal triangle test', function() {
  it('depth = 5, result length test', function() {
    expect(pascal(5).length).toBe(5);
  });

  it('depth = 100, result length test', function() {
    expect(pascal(100).length).toBe(100);
  });

  it('level 3 items count', function() {
    expect(pascal(100)[99].length).toBe(100);
  });

  it('level 3 items count', function() {
    expect(pascal(10)[2].length).toBe(3);
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

  it('depth = 5', function() {
    expect(pascal(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
  });

  it('depth = 6', function() {
    expect(pascal(6)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1]
    ]);
  });

  it('depth = 5', function() {
    expect(pascal(5).toString()).toBe('1,1,1,1,2,1,1,3,3,1,1,4,6,4,1');
  });
});
