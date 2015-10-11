describe('move zeros', function() {

  var arrNum;

  beforeEach(function() {
    arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
  });

  it('move to the right', function() {
    expect(moveZeros(arrNum, true)).toEqual([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
    expect(arrNum).toEqual([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]);
  });

  it('move to the right', function() {
    expect(moveZeros(arrNum, false)).toEqual([0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
    expect(arrNum).toEqual([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]);
  });

  it('move to the right', function() {
    expect(moveZeros(arrNum)).toEqual([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
    expect(arrNum).toEqual([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]);
  });
});
