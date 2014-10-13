describe('frog solution tests', function() {
  it('test', function() {
    expect(solution([1, 2, 1, 5])).toBe(3);
    expect(solution([1, 1, 1, 1, 1, 1])).toBe(6);
    expect(solution([2, 5, -1, 1, 1])).toBe(3);
    expect(solution([-2, 5, 5])).toBe(-1);
  });

  it('circle', function() {
    expect(solution([1, -1])).toBe(-1);
    expect(solution([1, 1, -2, 5])).toBe(-1);
  })
});
