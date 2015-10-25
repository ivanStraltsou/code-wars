describe('concat arrays', function() {

  it('concat arrays of the same lenght', function() {
    expect(concatArrays([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
  });

  it('concat arrays when second array is longer', function() {
    expect(concatArrays([1, 2, 3], ['abc', 'def', 4, 'ghi'])).toEqual(['1abc', '2def', 7, 'ghi']);
  });

  it('concat arrays when first array is longer', function() {
    expect(concatArrays([1, 2, 3, 4, 6], ['abc', 'def', 4, 'ghi'])).toEqual(['1abc', '2def', 7, '4ghi', 6]);
  });
});
