describe('group in 10s', function() {

  var grouped;

  beforeEach(function() {
    grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50);
  });

  it('should group numbers', function() {
    expect(grouped[0]).toEqual([3, 8]);
    expect(grouped[1]).toEqual([12, 17, 19]);
    expect(grouped[2]).toEqual([25]);
    expect(grouped[3]).toEqual([35, 38]);
    expect(grouped[4]).not.toBeDefined();
    expect(grouped[5]).toEqual([50]);
  });
});
