describe('RegExp.prototype.clone', function() {
  var regex;

  beforeEach(function() {
    regex = /^[abc]/gim;
  });

  it('basic clone', function() {
    expect(regex.clone() === regex).toBeFalsy();
  });

  it('exec', function() {
    expect(regex.clone().exec('ZZ\nZZCZ\nCZZ\na')).toEqual(['C']);
    expect(regex.clone().exec('ZZ\nZZCZ\nCZZ\na')).toEqual(['C']);

    expect(regex.exec('ZZ\nZZCZ\nCZZ\na')).toEqual(['C']);
    expect(regex.clone().exec('ZZ\nZZCZ\nCZZ\na')).toEqual(['a']);

    expect(regex.exec('ZZ\nZZCZ\nCZZ\na')).toEqual(['a']);
    expect(regex.clone().exec('ZZ\nZZCZ\nCZZ\na')).toBeNull();
  });
});
