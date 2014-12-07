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
  
 /* it("Multiple elements test", function() {
    assertSimilar(ArrayComprehension({generator: '1,4,6,3,-2'}), [1,4,6,3,-2]);
  });
  
  it("Range tests", function() {
    assertSimilar(ArrayComprehension({generator: '1,3..4'}), [1,3]);
    assertSimilar(ArrayComprehension({generator: '1,2..2'}), [1,2]);
    assertSimilar(ArrayComprehension({generator: '3,2..2'}), [3,2]);
    assertSimilar(ArrayComprehension({generator: '5..3'}), []);
    assertSimilar(ArrayComprehension({generator: '90..80'}), []);
    //assertSimilar(ArrayComprehension({generator: '8,4..40'}), [8]);
    assertSimilar(ArrayComprehension({generator: '1,90..80'}), [1]);
    assertSimilar(ArrayComprehension({generator: '1..5'}), [1,2,3,4,5]);
    assertSimilar(ArrayComprehension({generator: '1,4..12'}), [1,4,7,10]);
    assertSimilar(ArrayComprehension({generator: '12,10..4'}), [12,10,8,6,4]);
  });*/
});
