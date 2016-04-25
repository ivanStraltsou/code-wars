describe('splitAny', function() {

    it('splits strings', function() {
        expect(splitAny('Hello' )).toEqual([ 'H', 'e', 'l', 'l', 'o' ]);
    });
    
    it('splits strings with spaces into nested arrays', function() {
        expect(splitAny('Hello world!')).toEqual([[ 'H', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd', '!' ]]);
    });
    
    it('splits numbers', function() {
        expect(splitAny(891)).toEqual([8, 9, 1]);
    });
    
    it('splits the return value of a callback', function() {
        expect(splitAny(function() { return 123; })).toEqual([1, 2, 3]);
    });
    
    it('splits objects into nested arrays of key/value pairs', function() {
        expect(splitAny({firstProp: 'a string', secondProp: 44, thirdProp: false })).toEqual([['firstProp', 'a string'], ['secondProp', 44], ['thirdProp', false]]);
    });
    
    it('splits each value in an array', function() {
        expect(splitAny([10, { test: 'test' }, function() {return 'hello';} ])).toEqual([[1, 0], [['test', 'test']], ['h', 'e', 'l', 'l', 'o']]);
    });
    
    it('throws an error when passed an incompatible value', function() {
        expect(function() { splitAny(false) }).toThrowError(TypeError);
    });
});
