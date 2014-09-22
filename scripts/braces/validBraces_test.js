
describe('validBraces test', function() {
  it('{}: true', function() {
    expect(validBraces('{}')).toBe(true);
  });

  it('(){}[]: true', function() {
    expect(validBraces('(){}[]')).toBe(true);
  });

  it('{(): false', function() {
    expect(validBraces('{()')).toBe(false);
  });

  it('[(]): false', function() {
    expect(validBraces('[(])')).toBe(false);
  });

  it('([{}]): true', function() {
    expect(validBraces('([{}])')).toBe(true);
  });

  it('([{(}]): false', function() {
    expect(validBraces('([{(}])')).toBe(false);
  });
});
