describe('connect four', function() {

  it('should check who won - red case', function() {
    var board = [['-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-'],
                ['-','-','-','R','R','R','R'],
                ['-','-','-','Y','Y','R','Y'],
                ['-','-','-','Y','R','Y','Y'],
                ['-','-','Y','Y','R','R','R']];
    expect(connectFour(board)).toEqual('R');
  });

  it('should check who won - yellow case', function() {
    var board = [['-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-'],
                ['-','-','-','Y','R','R','R'],
                ['-','-','-','Y','Y','R','Y'],
                ['-','-','-','Y','R','Y','Y'],
                ['-','-','Y','Y','R','R','R']];
    expect(connectFour(board)).toEqual('Y');
  });
});
