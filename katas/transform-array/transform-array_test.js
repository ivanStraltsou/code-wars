describe('transform array', function() {

  var input;

  it('should transform array to object', function() {
    input = [
      {name: 'Name1', value: 123},
      {name: 'Name2', value: 'abc'},
      {name: 'Name3', value: '123abc'},
      {name: 'Name4', value: 'abc123'}
    ];
    expect(transformArray(input)).toEqual({Name1: 123, Name2: 'abc', Name3: '123abc', Name4: 'abc123'});
  });

  it('one name/value pair case', function() {
    input = {name: 'Name1', value: 123};
    expect(transformArray(input)).toEqual({Name1: 123});
  });
});
