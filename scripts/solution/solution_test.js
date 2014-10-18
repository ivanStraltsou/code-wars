describe('frog solution tests', function() {
  it('has solution', function() {
    expect(solution([1, 2, 1, 5])).toBe(3);
    expect(solution([1, 1, 1, 1, 1, 1])).toBe(6);
    expect(solution([2, 5, -1, 1, 1])).toBe(3);
    expect(solution([-2, 5, 5])).toBe(-1);
  });

  it('circular', function() {
    expect(solution([1, -1])).toBe(-1);
    expect(solution([1, 1, -2, 5])).toBe(-1);
    expect(solution([1, 1, -3, 5])).toBe(-1);
  });

  it('invalid input', function() {
    expect(solution([-1])).toBe(-1);
    expect(function() {
      solution('asd');
    }).toThrow(new Error('Wrong input type is used'));
  });
});
