
describe('validBraces test', function() {
  it('{}: true', function() {
    expect(validBraces('{}')).toBe(true);
  });

  it('(){}[]: true', function() {
    expect(validBraces('(){}[]')).toBe(true);
  });

  it('(a)a{}b[b]b: true', function() {
    expect(validBraces('(a)a{}b[b]b')).toBe(true);
  });

  it('{(): false', function() {
    expect(validBraces('{()')).toBe(false);
  });

  it('[(]): false', function() {
    expect(validBraces('[(])')).toBe(false);
  });

  it('[(a])a: false', function() {
    expect(validBraces('[(a])a')).toBe(false);
  });

  it('([{}]): true', function() {
    expect(validBraces('([{}])')).toBe(true);
  });

  it('([{(}]): false', function() {
    expect(validBraces('([{(}])')).toBe(false);
  });
});
