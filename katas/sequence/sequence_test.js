describe('sequence function', function() {
  var spy = {
    sum: function(a, b) {
      return a + b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    concat: function(a, b) {
      return String(a) + String(b);
    },
    log: function() {
      console.log.apply(console, arguments)
    }
  };

  beforeEach(function() {
    spyOn(spy, 'sum').and.callThrough();
    spyOn(spy, 'multiply').and.callThrough();
    spyOn(spy, 'concat').and.callThrough();
    spyOn(spy, 'log').and.callThrough();
  });

  afterEach(function() {
    spy.sum.calls.reset();
    spy.multiply.calls.reset();
    spy.concat.calls.reset();
    spy.log.calls.reset();
  });

  it('single invocation', function() {
    expect(sequence(spy.sum)(1, 1)).toEqual(2);

    expect(spy.sum.calls.count()).toEqual(1);
    expect(spy.sum).toHaveBeenCalledWith(1, 1);
  });

  it('sequence 2', function() {
    expect(sequence(spy.sum, spy.multiply)(1, 1)(4)).toEqual(8);
    expect(spy.sum.calls.count()).toEqual(1);
    expect(spy.multiply.calls.count()).toEqual(1);

    expect(spy.sum).toHaveBeenCalledWith(1, 1);
    expect(spy.multiply).toHaveBeenCalledWith(2, 4);
  });

  it('sequence 3', function() {
    expect(sequence(spy.sum, spy.multiply, spy.concat)(1, 1)(4)(' add this')).toEqual('8 add this');
    expect(spy.sum.calls.count()).toEqual(1);
    expect(spy.multiply.calls.count()).toEqual(1);
    expect(spy.concat.calls.count()).toEqual(1);

    expect(spy.sum).toHaveBeenCalledWith(1, 1);
    expect(spy.multiply).toHaveBeenCalledWith(2, 4);
    expect(spy.concat).toHaveBeenCalledWith(8, ' add this');

  });

  it('sequence 3', function() {
    expect(sequence(spy.sum, spy.multiply, spy.concat, spy.log)(1, 1)(4)(' add this')()).toBeUndefined();
    expect(spy.sum.calls.count()).toEqual(1);
    expect(spy.multiply.calls.count()).toEqual(1);
    expect(spy.concat.calls.count()).toEqual(1);
    expect(spy.log.calls.count()).toEqual(1);

    expect(spy.sum).toHaveBeenCalledWith(1, 1);
    expect(spy.multiply).toHaveBeenCalledWith(2, 4);
    expect(spy.concat).toHaveBeenCalledWith(8, ' add this');
    expect(spy.log).toHaveBeenCalledWith('8 add this');

  });

  it('sequence 3', function() {
    expect(sequence(
        function(a, b) {
          return a + b;
        },
        function(a, b) {
          return a * b;
        },
        function(a, b) {
          return String(a) + String(b);
        },
        function() {
          return console.log.apply(console, arguments);
        }
    )(1, 1)(2)(' add this')()).toBeUndefined();
  });

});
