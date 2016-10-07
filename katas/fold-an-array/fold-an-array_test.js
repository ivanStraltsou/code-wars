describe('Fold an array', function() {
  it('should fold an array with odd number of items for 1 level', function() {
    expect(foldAnArray([1,2,3,4,5], 1)).toEqual([6,6,3]);
  });
  
  it('should fold an array with odd number of items for 2 levels', function() {
    expect(foldAnArray([1,2,3,4,5], 2)).toEqual([9,6]);
  });
  
  it('should fold an array with odd number of items for 3 levels', function() {
    expect(foldAnArray([1,2,3,4,5], 3)).toEqual([15]);
  });
  
  it('should fold an array with even number of items for 1 level', function() {
    expect(foldAnArray([-9, 9, -8, 8, 66, 23], 1)).toEqual([14, 75, 0]);
  });
});
