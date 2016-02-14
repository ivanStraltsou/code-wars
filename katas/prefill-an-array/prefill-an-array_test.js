describe('prefill an array', function() {

    it('should prefill array with nums or strings', function() {
        expect(prefill(3, 1)).toEqual([1,1,1]);
        expect(prefill(2, 'abc')).toEqual(['abc', 'abc']);
        expect(prefill(0, 1)).toEqual([]);
    });

    it('should be possible to pass function as parameter', function() {
        expect(prefill(3, prefill(2,'2d'))).toEqual([['2d','2d'],['2d','2d'],['2d','2d']]);
    });

    it('should throw type error when n is not integer', function() {
        expect(function() { prefill('xyz', 1) }).toThrowError(TypeError, 'xyz is invalid');
    });
});
