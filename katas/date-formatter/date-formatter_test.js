describe('date formatter', function() {

  it('should return properly formatted date with year, day and month', function() {
    expect(formatDate({day: '01', month: '02', year: '1999'}, 'YYYY-MM-DD')).toEqual('1999-02-01');
    expect(formatDate({day: '01', month: '02', year: '1999'}, 'DD-MM-YYYY')).toEqual('01-02-1999');
  });

  it('should return properly formatted date with year and month', function() {
    expect(formatDate({month: '03', year: '2005'}, 'YYYY-MM-DD')).toEqual('2005-03');
  });

  it('should return properly formatted date with year only', function() {
    expect(formatDate({year: '2003'}, 'YYYY-MM-DD')).toEqual('2003');
  });

  it('should return properly formatted date with year, day and month; different delimiter', function() {
    expect(formatDate({day: '01', month: '02', year: '1999'}, 'YYYY/MM/DD')).toEqual('1999/02/01');
    expect(formatDate({day: '01', month: '02', year: '1999'}, 'YYYY.MM.DD')).toEqual('1999.02.01');
  });
});
