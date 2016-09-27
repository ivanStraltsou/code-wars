fdescribe('build tower', function() {
  it('should return tower with 3 floors', function() {
    expect(buildTower(3)).toEqual([
      '  *  ',
      ' *** ',
      '*****'
    ]);
  });
  
  it('should return tower with 6 floors', function() {
    expect(buildTower(6)).toEqual([
      '     *     ',
      '    ***    ',
      '   *****   ',
      '  *******  ',
      ' ********* ',
      '***********'
    ]);
  });
  
  it('should return null if number of floors is zero or not a number', function() {
    expect(buildTower(0)).toEqual(null);
    expect(buildTower({})).toEqual(null);
    expect(buildTower(true)).toEqual(null);
  });
});
