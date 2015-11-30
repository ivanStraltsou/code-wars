describe('two cube sums', function() {

    var inputNumber;

    it('should return correct result', function() {
        expect(hasTwoCubeSums(1729)).toEqual(true);
        expect(hasTwoCubeSums(42)).toEqual(false);
    });
});
