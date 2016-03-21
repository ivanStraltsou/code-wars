describe('clockwise spiral', function() {
    it('should return clockwise spiral', function() {
        expect(clockwiseSpiral(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]]);
        expect(clockwiseSpiral(4)).toEqual([[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]);
        expect(clockwiseSpiral(5)).toEqual([[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]);
    });

    it('should return an empty array if N < 1', function() {
        expect(clockwiseSpiral(0)).toEqual([]);
        expect(clockwiseSpiral(-3)).toEqual([]);
    });
});
