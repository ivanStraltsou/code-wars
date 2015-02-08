describe('prototype', function() {
  it("Empty list test", function() {
    var list = ArrayComprehension({generator: ''});
    expect(list).toEqual([]);
    expect(ArrayComprehension({})).toEqual([]);
    expect(ArrayComprehension({generator: '    '})).toEqual([]);
  });
  
  it("One element test", function() {
    var list = ArrayComprehension({generator: '1'});
    expect(list).toEqual([1]);
  });
  
  it("Two elements test", function() {
    expect(ArrayComprehension({generator: '1,4'})).toEqual([1, 4]);
    expect(ArrayComprehension({generator: '1   ,  4  '})).toEqual([1, 4]);
  });
  
  it("Multiple elements test", function() {
    expect(ArrayComprehension({generator: '1,4,6,3,-2'})).toEqual([1,4,6,3,-2]);
  });
  
  it("Range tests", function() {
    expect(ArrayComprehension({generator: '1..5'})).toEqual([1,2,3,4,5]);
    expect(ArrayComprehension({generator: '1,3..4'})).toEqual([1,3]);
    expect(ArrayComprehension({generator: '1,2..2'})).toEqual([1,2]);
    expect(ArrayComprehension({generator: '3,2..2'})).toEqual([3,2]);
    expect(ArrayComprehension({generator: '5..3'})).toEqual([]);
    expect(ArrayComprehension({generator: '90..80'})).toEqual([]);
    expect(ArrayComprehension({generator: '8,4..40'})).toEqual([8]);
    expect(ArrayComprehension({generator: '1,90..80'})).toEqual([1]);
    expect(ArrayComprehension({generator: '1,4..12'})).toEqual([1,4,7,10]);
    expect(ArrayComprehension({generator: '12,10..4'})).toEqual([12,10,8,6,4]);
  });
});
