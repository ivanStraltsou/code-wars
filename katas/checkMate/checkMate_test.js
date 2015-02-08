describe('checkMate testing', function() {
  it('A1', function() {
    expect(checkMate(['A1'])).toEqual(
        ['black']
    );
  });

  it('B2', function() {
    expect(checkMate(['B2'])).toEqual(
        ['black']
    );
  });

  it('A2', function() {
    expect(checkMate(['H1'])).toEqual(
        ['white']
    );
  });

  it('H1', function() {
    expect(checkMate(['H1'])).toEqual(
        ['white']
    );
  });

  it('nested cells', function() {
    expect(checkMate([['C1'],['F1'],[['B5'],['E1']],[['G3'],['C3'],['D3']],[['A4'],['H2']]])).toEqual(
        [['black'],['white'],[['white'],['black']],[['black'],['black'],['white']],[['white'],['black']]]
    );
  });
});
