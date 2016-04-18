describe('haskell list dot notation', function() {
    it('should return array', function() {
        expect(ArrayComprehension('1,4,-3')).toEqual([1,4,-3]);
        expect(ArrayComprehension('1..5')).toEqual([1,2,3,4,5]);
        expect(ArrayComprehension('1,3..7')).toEqual([1,3,5,7]);
        expect(ArrayComprehension('7,5..2')).toEqual([7,5,3]);
    });
});