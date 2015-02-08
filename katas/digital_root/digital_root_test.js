describe('digital root tests', function() {
  it('single sum', function() {
    expect(digital_root(431)).toBe(8);
    expect(digital_root(134)).toBe(8);
    expect(digital_root(0)).toBe(0);
    expect(digital_root(3)).toBe(3);
    expect(digital_root(341)).toBe(8);
    expect(digital_root(900)).toBe(9);
  });

  it('double sum', function() {
    expect(digital_root(9001)).toBe(1);
    expect(digital_root(942)).toBe(6);
    expect(digital_root(249)).toBe(6);
    expect(digital_root(429)).toBe(6);
  });

  it('triple sum', function() {
    expect(digital_root(9999991)).toBe(1);
  });
});
